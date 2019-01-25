import * as createStore from "./context";
import {merge} from "lodash";
import actionsCreators from "./action";
const initialState = {};
const tempStore = {initialState, actionsCreators};
const store = merge(tempStore);

console.log('Store', store)
export const { Provider, connect, actions, subscribe, getState } = createStore(store);
