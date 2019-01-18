import {get, isEmpty, isObject} from 'lodash'
import {kraxFetch, kraxFetchOptions} from './krax-fetch';
import {actions, subscribe, getState} from './store'
import {ActionOptions, KraxResponse, ActionType} from './types'
import toastMessage from './message'

const initialValue:ActionType = {
    loading: true,
    message: '',
    payload: null,
    name: null,
    headers: null,
    ok: false,
    statusCode: null
};

export function krax<T>(options: ActionOptions<T>): Promise<KraxResponse<T>> & Promise<any> {
    const {request, payload} = options;

    let lastPromise;

    const run = async () => {
        actions.set({
            ...initialValue,
            name: options.name
        });

        let confirmStatus:boolean = false;

        if (options.confirm && !isEmpty(options.confirm)) {
            const toastResult = await toastMessage({
                message:'',
                confirmMessage: options.confirm,
                overlayClose: false,
                close: false,
                theme: options.confirm.theme,
                messageType: options.confirm.theme,
                timeout: 10000000000
            });
            confirmStatus = toastResult.confirm;
        } else {
            confirmStatus = true
        }

        if (request && !isEmpty(request) && isObject(request) && request.url && confirmStatus) {

            return kraxFetch<T>(kraxFetchOptions(request)).then((data) => {
                if (data.ok) {
                    // onSuccess
                    actions.set<ActionType>({
                        name: options.name,
                        loading: false,
                        payload: data.data,
                        headers: data.headers,
                        ok: true,
                        message: data.message || '',
                        statusCode: data.statusCode
                    }, (ok: any) => {
                        if (ok) {
                            subs(options.name, options, true);
                        }
                    });

                } else {
                    // onError
                    actions.set({
                        name: options.name,
                        loading: false,
                        payload: null,
                        headers: data.headers,
                        ok: false,
                        message: data.message || '',
                        statusCode: data.statusCode
                    }, (ok: any) => {
                        if (!ok) {
                            subs(options.name, options, false);
                        }
                    });
                }
                return data;
            })
        } else if (payload && confirmStatus) {
            return new Promise((resolve) => {
                try {
                    actions.set({
                        name: options.name,
                        loading: false,
                        payload: payload,
                        ok: true,
                        message: '',
                    }, (ok: any) => {
                        if (ok) {
                            subs(options.name, options, true);
                        }
                    });
                } catch (e) {
                    actions.set({
                        name: options.name,
                        loading: false,
                        payload: null,
                        ok: false,
                        message: '',
                    }, (ok: any) => {
                        if (!ok) {
                            subs(options.name, options, false);
                        }
                    });
                }
                resolve(payload);
            })

        } else {
            console.warn("Houston! We have a problem")
        }

        return new Promise((resolve) => {
            resolve(true);
        })
    };

    const checkOnBefore = async (onBeforeReturn) => {

        if (onBeforeReturn && onBeforeReturn['then']) {
            await onBeforeReturn;
        }

        return new Promise((resolve) => {
            resolve();
        });
    };

    // onBefore
    if (options.onBefore) {

        const after = options.onBefore(getState());

        checkOnBefore(after).then(() => {
            lastPromise= run();
        });
    } else {
        lastPromise = run;
    }

    return lastPromise;
}

function subs(name: string, options, status) {
    subscribe((_, state) => {
        if (get(state, name) && status) {
            if (options.onSuccess) {
                options.onSuccess(state)
            }
        }

        if (get(state, name) && !status) {
            if (options.onError) {
                options.onError(state, get(state, name).message)
            }
        }
    });
}

