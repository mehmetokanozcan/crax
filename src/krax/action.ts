import {omit,set} from 'lodash'
import {getState} from './store'
import {fromJS} from 'immutable'

export default {
    set: <T>(_val:any, _a:any, payload:any, cb: ( ok: boolean ) => { x: T }) => {

        const setParameters:T = <T>{
            ...omit(payload, ['name', 'ok']),
            loading: payload.loading,
            error: payload.error,
            payload: payload.payload,
            statusCode: payload.statusCode
        };

        const state = getState();
        const newState = set(state, payload.name, setParameters);

        const store = {
            ...newState
        };

        if (cb) {
            cb(payload.ok);
        }

        return fromJS(store).toJS(store);

    },
    reset: (_val:any, _a:any, payload:any) => {
        const store = omit(getState(), payload);
        return {...store};
    }


}
