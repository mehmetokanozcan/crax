/*export type RequestBody =
    string
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | ReadableStream
    | object
    | null
    | undefined*/

type KraxRequest = {
    url: string,
    body?: BodyInit | null | object;
    cache?: RequestCache | any;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    signal?: AbortSignal | null;
    window?: any;
}

type ActionOptions<T> = {
    name: string,
    payload?: Partial<T>,
    request?: KraxRequest,
    onSuccess?: (state: any) => any,
    onBefore?: (state: any) => any,
    onError?: (state: any, error: any) => any,
}

export type KraxResponse<T> = {
    data?: T | null,
    ok?: boolean,
    statusCode?: number,
    headers?: any,
    message?: any
}

export type ActionType = {
    name: string | null,
    ok: boolean,
    statusCode?: number | null,
    loading: boolean,
    message?: any,
    payload: any,
    headers: any,
}

