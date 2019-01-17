declare module "react-waterfall" {
    import { Config, Store } from "react-waterfall/types";

    const rw: ReactWaterfall;

    interface ReactWaterfall {
        <S, A>(config: Config<S, A>, middlewares?: any[]): Store<S, A>;
    }

    export = rw;
}

declare module "react-waterfall/types" {
    import * as React from "react";

    export type Config<S, A> = {
        initialState: S,
        actionsCreators: {
            [K in keyof A]: (state: S, actions: A, ...args: any[]) => Partial<S> | Promise<Partial<S>>
        }
    }

    export type Connect<S> = (selector: (state: S) => any) => (baseComponent: React.ComponentType<any>) => React.ComponentType<any>

    export type Store<S, A> = {
        Provider: any,
        connect: Connect<S>,
        actions: A,
        subscribe: any,
        unsubscribe: any,
    }
}