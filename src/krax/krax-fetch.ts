import {KraxRequest, KraxResponse} from './types'
import {toUpper, omit} from 'lodash'

interface FetchOptions extends RequestInit {
    url: string,
}

export function kraxFetch<T>(options: FetchOptions): Promise<KraxResponse<T>> {

    console.log('ssss')
    return new Promise((resolve) => {
        fetch(options.url, omit(options,'url'))
            .then((response) => {
                return {
                    data: response.json(),
                    ok: response.ok,
                    statusCode: response.status,
                    headers: response.headers
                }
            })
            .then(async ({ok, statusCode, headers, data}) => {


                const responseData = await data;
                const kraxResponse: KraxResponse<T> = {
                    data: responseData,
                    ok,
                    statusCode,
                    headers,
                    message: responseData.message
                }


                resolve(kraxResponse);
            })
            .catch((error) => {
                const kraxResponse: KraxResponse<T> = {
                    ok: false,
                    data: null,
                    statusCode: 9999,
                    message: error.message
                }

                resolve(kraxResponse);
            })
    });

}

export function kraxFetchOptions(fetchParams: KraxRequest) {

    const {url, method, mode, cache, credentials, headers, redirect, referrer, body} = fetchParams;
    const METHOD = method ? toUpper(method) : 'GET';
    const MODE = mode ? {mode} : {};
    const CACHE = cache ? {cache} : {};
    const CREDENTIAL = credentials ? {credentials} : {};
    const REDIRECT = redirect ? {redirect} : {};
    const REFERRER = referrer ? {referrer} : {};
    const BODY = body ? {body: JSON.stringify(body)} : {};
    let HEADERS:object = headers ? headers : {};

    console.log('Meytt', METHOD)

    HEADERS = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            ...HEADERS
        }
    };

    let fetchBody = {
        method: METHOD,
        ...BODY,
        ...HEADERS,
        ...MODE,
        ...CACHE,
        ...CREDENTIAL,
        ...REDIRECT,
        ...REFERRER
    };

    if (METHOD && (toUpper(METHOD) === "DELETE" || toUpper(METHOD) === "GET")) {
        fetchBody = omit(fetchBody, 'body')
    }

    return {
        url,
        ...fetchBody
    }

}
