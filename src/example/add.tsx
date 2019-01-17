// import * as uuidv4 from 'uuid/v4';

import {krax} from '../krax/krax'

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
        request: {
            url: 'https://api.github.com/repos/mehmetokanozcan/react-kraxs',
            method:'GET',
            mode: 'cors',
            body: {
                name: 'poklan'
            },
            headers: {
                "Content-Tyasdape": "sdfsdfsdfsdf",
            },
            cache: "no-cache",
            redirect: "follow",
            referrer: "",
            credentials: "same-origin"
        },
        /*request: {
            url: 'http://localhost:4000/pages',
            method:'POST',
            body: {
                id: uuidv4(),
                title: 'namer',
                category: 'ahmet'
            }
        },*/
        onBefore: async (state:any) => {
            console.log('Before', state)
        },
        onSuccess: (state:any) => {
            // baskaaction()
            console.log('SUCCESS', state);

        },
        onError: (state:any, error:any) => {
            // baskaaction()
            console.log('!!', state, error);

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
