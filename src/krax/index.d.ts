// Type definitions for [~react-krax~]
// Project: [~OneFrameWeb~]
// Definitions by: [~Mehmet Okan Ozcan & Mustafa Cihat Aykaş~] <[~https://github.com/mehmetokanozcan/react-krax~]>

export = Krax;

declare namespace Krax {

    export const Provider: any;
    export const connect: any;
    export const getState: any;
    export function toastMessage(messageOptions: Message): Promise<{ confirm: boolean }>;

    export function krax<T>(options: Krax.ActionOptions<T>): Promise<Krax.KraxResponse<T>> & Promise<any>;

    export type KraxRequest = {
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
    }

    export type Confirm = {
        buttonYes: string,
        buttonNo: string,
        message: string,
        theme?: 'show' | 'info' | 'success' | 'error' | 'warning'
    }

    export type ActionOptions<T> = {
        name?: string,
        payload?: Partial<T>,
        request?: KraxRequest,
        reset?: any[],
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
}
