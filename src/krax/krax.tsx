import {get} from 'lodash'
import {kraxFetchRun} from './krax-fetch';
import {actions, subscribe, getState} from './store'
import {ActionOptions, KraxResponse} from './types'
// import {ToastMessage} from '../index'

const initialValue = {
    loading: true,
    message: '',
    payload: null,
    name: null,
    header: null,
    ok: false,
    statusCode: null

}

export function krax<T>(options: ActionOptions<T>): Promise<KraxResponse<T>> & Promise<any> {
    const {request, payload} = options;


    console.log('GetState**', getState())
    // onBefore
    if (options.onBefore) {
        options.onBefore(getState())
    }

    actions.set({
        ...initialValue,
        name: options.name
    })


    if (request) {
        return kraxFetchRun<T>({
            url: request.url,
            body: request.payload
        }).then((data) => {

            if (data.ok) {
                actions.set({
                    name: options.name,
                    loading: false,
                    payload: data.data,
                    ok: true
                }, (ok: any) => {
                    console.log('is ok?', ok);
                    subs(options.name, options);
                });

            } else {
                // onError
                if (options.onError) {
                    options.onError('asdasd', data)
                }
            }

            // onComplete
            if (options.onComplete) {
                options.onComplete(getState())
            }

            return data;
        })
    }

    if (payload) {
        return new Promise((resolve) => {
            resolve(payload);
        })
    }


    return new Promise((resolve) => {
        resolve(true);
    })
}


function subs(name: string, options) {
    subscribe((_, state) => {
        if (get(state, name) && get(state, name).ok) {
            if (options.onSuccess) {
                options.onSuccess('asdasd', 'asdasdasd')
            }
        }
    });
}

