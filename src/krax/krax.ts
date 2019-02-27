import { /* get,  */isEmpty } from 'lodash'
import { kraxFetch, kraxFetchOptions } from './krax-fetch';
import { actions, getState } from './store'
import { ActionOptions, KraxResponse, ActionType } from './types'
import toastMessage from './message'

const initialValue:ActionType = {
    loading: true,
    error: '',
    payload: null,
    name: null,
    headers: null,
    ok: false,
    statusCode: null
};

export function krax<T>(options: ActionOptions<T>): Promise<KraxResponse<T>> & Promise<any> {
    const {request, payload, reset} = options;
    const { onSuccess, onError } = options;


    const run = async () => {
        actions.set({
            ...initialValue,
            name: options.name
        });

        if (options.confirm && !isEmpty(options.confirm)) {
            await toastMessage({
                message:'',
                confirmMessage: options.confirm,
                overlayClose: false,
                close: false,
                theme: options.confirm.theme,
                messageType: options.confirm.theme,
                timeout: 10000000000
            });
        }

        if (request) {
            return kraxFetch<T>(kraxFetchOptions(request)).then((data) => {
                if (data.ok) {
                    // onSuccess
                    actions.set<ActionType>({
                        name: options.name,
                        loading: false,
                        payload: data.data,
                        headers: data.headers,
                        ok: true,
                        statusCode: data.statusCode
                    }, (ok: any) => {
                        if (ok) {
                           onSuccess && onSuccess(getState());
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
                        error: data.error || '',
                        statusCode: data.statusCode
                    }, (ok: any) => {
                        if (!ok) {
                            onError && onError(getState(), data.error || '');
                        }
                    });
                }
                return data;
            })
        }

        if (payload) {
            return new Promise((resolve) => {
                try {
                    actions.set({
                        name: options.name,
                        loading: false,
                        payload,
                        ok: true,
                    }, (ok: any) => {
                        if (ok) {
                            onSuccess && onSuccess(getState());
                        }
                    });
                } catch (e) {
                    actions.set({
                        name: options.name,
                        loading: false,
                        payload: null,
                        ok: false,
                        error: 'Houston! We have a problem',
                    }, (ok: any) => {
                        if (!ok) {
                            onError && onError(getState(), e);
                        }
                    });
                }
                resolve(payload);
            })

        }

        if (reset) {
            return new Promise((resolve) => {
                actions.reset(reset);
                resolve(reset);
            })
        }

        console.warn("Houston! We have a problem.");
        console.warn("You did not specify neither request nor payload. You need to specify at least one of them.");

        return new Promise((resolve) => {
            resolve(true);
        })
    };

    const checkOnBefore = async (onBeforeReturn) => {

        if (onBeforeReturn && onBeforeReturn['then']) {
            await onBeforeReturn;
            return true;
        }
        return false;
    };

    // onBefore
    if (options.onBefore) {
        const after = options.onBefore(getState());

        checkOnBefore(after);
    }

    return run();
}

export function kraxReset<T>(options: ActionOptions<T>): Promise<KraxResponse<T>> & Promise<any> {
    actions.reset(options);

    return new Promise((resolve) => {
        resolve(true);
    })
}
