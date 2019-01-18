import {omit} from 'lodash'
export default {
    set: <T>(_val:any, _a:any, payload:any, cb: ( ok: boolean ) => { x: T }) => {
        const x = {
            [payload.name]: <T>{
                ...omit(payload, ['name', 'ok']),
                loading: payload.loading,
                error: payload.error,
                payload: payload.payload,
                statusCode: payload.statusCode
            }
        };

        if (cb) {
            cb(payload.ok);
        }

        return x;

    }


}
