import { KraxRequest, KraxResponse, FetchOptions } from './types';
import 'whatwg-fetch';
export declare function kraxFetch<T>(options: FetchOptions): Promise<KraxResponse<T>>;
export declare function kraxFetchOptions(fetchParams: KraxRequest): {
    referrer: string;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache: any;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache: any;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache: any;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache: any;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache: any;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache: any;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials?: undefined;
    cache: any;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials?: undefined;
    cache: any;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache?: undefined;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache?: undefined;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache?: undefined;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache?: undefined;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache?: undefined;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache?: undefined;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials?: undefined;
    cache?: undefined;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials?: undefined;
    cache?: undefined;
    mode: RequestMode;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache: any;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache: any;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache: any;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache: any;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache: any;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache: any;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials?: undefined;
    cache: any;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials?: undefined;
    cache: any;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache?: undefined;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache?: undefined;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache?: undefined;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache?: undefined;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache?: undefined;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache?: undefined;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials?: undefined;
    cache?: undefined;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials?: undefined;
    cache?: undefined;
    mode?: undefined;
    body: string;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache: any;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache: any;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache: any;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache: any;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache: any;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache: any;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials?: undefined;
    cache: any;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials?: undefined;
    cache: any;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache?: undefined;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache?: undefined;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache?: undefined;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache?: undefined;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache?: undefined;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache?: undefined;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials?: undefined;
    cache?: undefined;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials?: undefined;
    cache?: undefined;
    mode: RequestMode;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache: any;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache: any;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache: any;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache: any;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache: any;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache: any;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials?: undefined;
    cache: any;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials?: undefined;
    cache: any;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache?: undefined;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials: RequestCredentials;
    cache?: undefined;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache?: undefined;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials: RequestCredentials;
    cache?: undefined;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache?: undefined;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect: RequestRedirect;
    credentials?: undefined;
    cache?: undefined;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer: string;
    redirect?: undefined;
    credentials?: undefined;
    cache?: undefined;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
} | {
    referrer?: undefined;
    redirect?: undefined;
    credentials?: undefined;
    cache?: undefined;
    mode?: undefined;
    body?: undefined;
    method: any;
    url: string;
};
