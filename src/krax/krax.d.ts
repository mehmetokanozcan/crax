import { ActionOptions, KraxResponse } from './types';
export declare function krax<T>(options: ActionOptions<T>): Promise<KraxResponse<T>> & Promise<any>;
