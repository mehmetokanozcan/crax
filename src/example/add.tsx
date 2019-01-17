import { getState } from "../krax/store";

import {krax} from '../krax/krax'
import {kraxFetch} from "../krax/krax-fetch";

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

type TodoList = Todo[];

export const add = async () =>{
    // let user:any = JSON.parse(localStorage.getItem('user') as any) || {token: 'asdasdasdasdasdasd'};


    /*krax({
        path: 'okan',
        /!*payload: {
            x:'y'
        },*!/
        request: {
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            method: 'get',
            token: { 'Authorization': 'Bearer ' + user.token }
        }
    })*/


    await krax<TodoList>({
        name: 'getTodos',
        payload: kraxFetch({
            url: 'https://jsonplaceholder.typicode.com/todos',
            method:'GET',
            mode: 'cors',
            body: {},
            headers: {},
            cache: 'no-cache',
            redirect: '',
            referer: '',
            credentials: 'same-origin'
        }) ,
        onBefore: async (state:any) => {
            console.log('Before', state)
        },
        onAfter: () => {
            console.log('After')
        },
        onSuccess: () => {
            // baskaaction()
            console.log('SUCCESS', getState());

        },
        onError: () => {
            // baskaaction()
            // console.log('!!',actions.get());

        },
        onComplete: () => {
            // baskaaction()
            // console.log('!!',actions.get());

        }

    });




};

/*function baskaaction() {
    krax({
        name: 'ssss',
        payload: 'asdasdas'
        /!*onSuccess: ( state, payload ) => {
            console.log('--->>>>>---->>>>', state, payload)
        }*!/
    });
}*/
