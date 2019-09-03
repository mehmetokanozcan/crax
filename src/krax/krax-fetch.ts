import { KraxRequest, KraxResponse, FetchOptions } from './types'
import { toUpper, omit } from 'lodash'
import * as fetch from 'isomorphic-fetch'
// import 'whatwg-fetch'


function getHeaders(response) {

    let x:any = {};

    response.forEach(function(value, name) {
        x = {
            ...x,
            [name]: value
        }
    });

    return x
}

export function kraxFetch<T>(options: FetchOptions): Promise<KraxResponse<T>> {
    return new Promise<KraxResponse<T>>((resolve) => {
        fetch(options.url, omit(options,'url'))
            .then((response) => {
                return {
                    data: response.ok ? response.json() : response,
                    ok: response.ok,
                    statusCode: response.status,
                    headers: getHeaders(response.headers)
                }
            })
            .then(async ({ok, statusCode, headers, data}) => {
                const responseData = await data;
                const kraxResponse: KraxResponse<T> = {
                    data: responseData,
                    ok,
                    statusCode,
                    headers,
                    error: responseData
                };
                if (ok) {
                    resolve(kraxResponse);
                } else {
                    throw kraxResponse
                }
            })
            .catch((error) => {
                const kraxResponse: KraxResponse<T> = error;
                resolve(kraxResponse);
            })
    });
}

export function kraxFetchOptions(fetchParams: KraxRequest) {

    const {url, method, mode, cache, credentials, headers, redirect, referrer, body, isFile, isForm, isJson} = fetchParams;
    const METHOD = method ? toUpper(method) : 'GET';
    const MODE = mode ? {mode} : {};
    const CACHE = cache ? {cache} : {};
    const CREDENTIAL = credentials ? {credentials} : {};
    const REDIRECT = redirect ? {redirect} : {};
    const REFERRER = referrer ? {referrer} : {};
    // const BODY = body ? {body: JSON.stringify(body)} : {};
    let BODY = {};
    let HEADERS = {};

    const choosenWay = (isJson ? 1 : 0) + (isFile ? 1 : 0) + (isForm ? 1 : 0);
    if (choosenWay > 1) {
        throw new Error('KraxFetch: You can only choose one option between isJson, isFormWithFile and isFormWithoutFile!');
    }

    if (isJson) {
        BODY = body ? {body: JSON.stringify(body)} : {};

        HEADERS = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                ...(headers || {})
            }
        };
    }

    if (isFile) {
        const formData = new FormData();
        if (body) {
            Object.keys(omit(body,'files')).forEach((key:any) => {
                formData.append(key, body[key])
            });

            if ((body as any).files) {
                for (const file of (body as any).files) {
                    formData.append('files', file, file.name);
                }
            }
        }

        BODY = body ? {body: formData} : {};

        HEADERS = {
            headers: {
                ...(headers || {})
            }
        };
    }

    if (isForm) {
        const formData = new URLSearchParams();
        if (body) {
            Object.keys(body).forEach((key:any) => {
                formData.append(key, body[key])
            });
            BODY = { body: formData };
        }

        HEADERS = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                ...(headers || {})
            }
        };
    }

    if (!isForm && !isFile && !isJson) {
        BODY = body ? body : {};
        HEADERS = headers ? headers : {};
    }

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
