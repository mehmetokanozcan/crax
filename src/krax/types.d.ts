type KraxRequest = {
    url: string,
    body?: BodyInit | null | object,
    cache?: RequestCache | any,
    credentials?: RequestCredentials,
    headers?: HeadersInit,
    integrity?: string,
    keepalive?: boolean,
    method?: string,
    mode?: RequestMode,
    redirect?: RequestRedirect,
    referrer?: string,
    referrerPolicy?: ReferrerPolicy,
    signal?: AbortSignal | null,
    window?: any,
    isJson?: boolean,
    isFile?: boolean,
    isForm?: boolean

    // contentType?: 'application/x-www-form-urlencoded; charset=UTF-8' | 'multipart/form-data' | 'application/json; charset=utf-8'
}

type Confirm = {
    buttonYes: string,
    buttonNo: string,
    message: string,
    theme?: 'show' | 'info' | 'success' | 'error' | 'warning'
}

type ActionOptions<T> = {
    name?: string,
    payload?: Partial<T>,
    request?: KraxRequest,
    reset?:any[]
    confirm?: Confirm,
    onSuccess?: (state: T) => any,
    onBefore?: (state: T) => any,
    onError?: (state: T, error: any) => any,
}

export type KraxResponse<T> = {
    data?: T | null,
    ok?: boolean,
    statusCode?: number,
    headers?: any,
    error?: any
}

export type ActionType = {
    name: string | null,
    ok: boolean,
    statusCode?: number | null,
    loading: boolean,
    error?: any,
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

export interface FetchOptions extends RequestInit {
    url: string,
}

