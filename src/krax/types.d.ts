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

type Confirm = {
    buttonYes: string,
    buttonNo: string,
    message: string,
    theme?: 'show' | 'info' | 'success' | 'error' | 'warning'
}

type ActionOptions<T> = {
    name: string,
    payload?: Partial<T>,
    request?: KraxRequest,
    confirm?: Confirm,
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

export type Message = {
    theme?: string,
    icon?: string | null,
    title?: string | null,
    message: string,
    confirmMessage?: Confirm,
    position?: string,
    progressBar?: boolean,
    progressColor?: string,
    close?: boolean,
    timeout?: number,
    overlay?: boolean,
    overlayClose?: boolean,
    displayMode?: number | 0,
    target?: string | null,
    zindex?: number,
    maxWidth?: number | 600,
    messageType?: string,
}

