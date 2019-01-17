import {isObject, isEmpty,toUpper, get} from 'lodash'
import {actions} from './store'
// import * as t from 'io-ts'

interface Request {
    url: string,
    method: string,
    params?: object,
    token?: object
}

interface ActionParameters {
    path: string,
    payload?: any,
    request?: Request
}


export function krax(actionParameters:ActionParameters) {

    if (!shouldCallAction(actionParameters)) return;

    let parameters = initialParameters(actionParameters);
    let request:Request = get(parameters, ['request']);
    let payload:any = get(parameters, ['payload']);

    if (request && !isEmpty(request)) {
        /*const fetchBody = getFetchBody(request);

        console.log('fet,', fetchBody)*/

        getFetch(request)

        // fetchResult()
    }

    if (payload) {

    }

    actions.increment('asdasd')

    console.log('Parame', request)
    console.table([parameters][0])

}

function shouldCallAction(actionParameters) {
    if (!isObject(actionParameters) || isEmpty(actionParameters)) {
        return false;
    }
    return true;
}

function initialParameters(actionParameters) {
    if (!isEmpty(actionParameters)) {
        return {
            fetchStatus: null,
            ...actionParameters
        }
    }
    return null
}

async function getFetch(request:Request) {

    const body:object = getFetchBody(request);

    const result = await getFetchResult(request.url, body);

    if (!result.ok) {
        console.log('Hata', result)
    } else {
        result.json().then((item:any) => {
            console.log('item', item)
        })
    }


}

function getFetchBody(request:Request) {

    let method = request.method,
        // url = request.url,
        params = request.params,
        token = request.token || {};

    let header = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            ...token
        },
        fetchBody = {};

    if (method && (toUpper(method) === "POST" || toUpper(method) === "PUT")) {
        fetchBody = {
            method: toUpper(method),
            body: JSON.stringify(params),
            headers: header
        };
    } else if (method && (toUpper(method) === "DELETE" || toUpper(method) === "GET")) {
        fetchBody = {
            method: toUpper(method),
            headers: header
        };
    }

    /*const x = fetch(url, fetchBody).then(
        fetchResult
    );

    console.log('X--', x)*/

    return fetchBody;
}

function getFetchResult(url:string, body:object) {

    return fetch(url, body);

    /*response.json().then(
        item => {
            // console.log('asdasd', item, response)
        }
    )*/

    /*if (!response.ok) {
        console.log('asdasdssssss')
        return Promise.reject(response.statusText);
    }
    return  response.json().then(data => (
        {
            data: data,
            headers: {
                count: response.headers.get('X-Total-Count'),
                link: response.headers.get('Link')
            }
        })
    );*/

}
