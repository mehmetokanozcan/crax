import {KraxResponse} from './types'
import {toUpper, omit} from 'lodash'

interface FetchOptions extends RequestInit {
    url: string,
}

export function kraxFetchRun<T>(options: FetchOptions): Promise<KraxResponse<T>> {

    const response: Promise<KraxResponse<T>> = new Promise((resolve) => {
        fetch(options.url, options)
            .then((response) => {
                return {
                    data: response.json(),
                    ok: response.ok,
                    statusCode: response.status,
                    headers: response.headers
                }
            })
            .then(async (val) => {

                console.log('Arg', val)

                /*const responseData = await data;

                const kraxResponse: KraxResponse<T> = {
                    data: responseData,
                    error: null,
                    ok,
                    statusCode,
                    headers
                }*/


                // resolve(kraxResponse);
            })
            .catch((error) => {
                const kraxResponse: KraxResponse<T> = {
                    error,
                    ok: false,
                    data: null,
                    statusCode: 9999
                }

                resolve(kraxResponse);
            })
    });

    return response;
}

export function kraxFetch({url, method, mode, cache, credentials, headers, redirect, referer, body}) {

    if (!url) {
        console.warn('URL is not defined')
        return
    }

    const METHOD = method ? toUpper(method) : 'GET';
    const MODE = mode ? {mode} : {};
    const CACHE = cache ? {cache} : {};
    const CREDENTIAL = credentials ? {credentials} : {};
    const REDIRECT = redirect ? {redirect} : {};
    const REFERER = referer ? {referer} : {};
    const BODY = body ? {body: JSON.stringify(body)} : {};
    let HEADERS:object = headers ? {headers: headers} : {};

    HEADERS = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        ...HEADERS
    }

    let fetchBody = {
        method: METHOD,
        ...BODY,
        ...HEADERS,
        ...MODE,
        ...CACHE,
        ...CREDENTIAL,
        ...REDIRECT,
        ...REFERER
    };

    if (METHOD && (toUpper(METHOD) === "POST" || toUpper(METHOD) === "PUT")) {
        fetchBody = omit(fetchBody, 'body')
    }


    return {
        url,
        fetchBody
    }

}
