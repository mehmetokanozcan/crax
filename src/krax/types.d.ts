export type RequestBody =
    string
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | ReadableStream
    | null
    | undefined

type KraxRequest = {
    payload?: RequestBody
    url: string,
    method?: string,
}

type ActionOptions<T> = {
    name: string,
    payload?: Partial<T>,
    request?: KraxRequest,
    onSuccess?: (state: any, payload: any) => any,
    onBefore?: (state: any) => any,
    onAfter?: (state: any, payload: any) => any,
    onError?: (state: any, error: any) => any,
    onComplete?: (state: any) => any,
}

export type KraxResponse<T> = {
    data?: T | null,
    error?: any,
    ok?: boolean,
    statusCode?: number,
    headers?: any
}
