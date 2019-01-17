import {omit} from 'lodash'
export default {
    set: (_val:any, _a:any, payload:any, cb: ( ok: boolean ) => void) => {
        const x = {
            [payload.name]: {
                ...omit(payload, ['name', 'ok']),
                loading: true,
                message: 'sdfsdf',
                payload: payload.payload
            }
        };

        if (cb) {
            cb(payload.ok);
        }

        return x;

    }


}
