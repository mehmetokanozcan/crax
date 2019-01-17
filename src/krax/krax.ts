import {get, isEmpty, isObject} from 'lodash'
import {kraxFetch, kraxFetchOptions} from './krax-fetch';
import {actions, subscribe, getState} from './store'
import {ActionOptions, KraxResponse, ActionType} from './types'
// import {ToastMessage} from '../index'

const initialValue:ActionType = {
    loading: true,
    message: '',
    payload: null,
    name: null,
    headers: null,
    ok: false,
    statusCode: null

}

export function krax<T>(options: ActionOptions<T>): Promise<KraxResponse<T>> & Promise<any> {
    const {request, payload} = options;

    // onBefore
    if (options.onBefore) {
        options.onBefore(getState())
    }

    actions.set({
        ...initialValue,
        name: options.name
    })

    if (request && !isEmpty(request) && isObject(request) && request.url) {

        return kraxFetch<T>(kraxFetchOptions(request)).then((data) => {

            if (data.ok) {

                // onSuccess
                actions.set<ActionType>({
                    name: options.name,
                    loading: false,
                    payload: data.data,
                    headers: data.headers,
                    ok: true,
                    message: data.message,
                    statusCode: data.statusCode
                }, (ok: any) => {
                    if (ok) {
                        subs(options.name, options);
                    }
                });

            } else {
                // onError
                actions.set({
                    name: options.name,
                    loading: false,
                    payload: null,
                    ok: false,
                    message: data.message,
                    statusCode: data.statusCode
                }, (ok: any) => {
                    if (!ok) {
                        subs(options.name, options);
                    }
                });
            }
            return data;
        })
    } else if (payload) {
        return new Promise((resolve) => {
            try {
                actions.set({
                    name: options.name,
                    loading: false,
                    payload: payload,
                    ok: true,
                    message: '',
                    // statusCode: 200
                }, (ok: any) => {
                    if (ok) {
                        subs(options.name, options);
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
                        subs(options.name, options);
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
}

function subs(name: string, options) {
    subscribe((_, state) => {
        if (get(state, name) && get(state, name).ok) {
            if (options.onSuccess) {
                options.onSuccess(state)
            }
        }

        if (get(state, name) && !get(state, name).ok) {
            if (options.onError) {
                options.onError(state, get(state, name).message)
            }
        }
    });
}

