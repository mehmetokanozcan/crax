// import * as uuidv4 from 'uuid/v4';

import {krax, toastMessage} from '../krax'

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// type TodoList = Todo;

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




    await krax<Todo>({
        name: 'getTodos',
        request: {
            url: 'https://api.github.com/repos/mehmetokanozcan/react-krax',
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
        returnData: Todo,
        /*payload: {
            userId: 2342,
            id: 234234,
            title: 'sdfsdf',
            completed: false
        },*/
        /*confirm: {
            buttonYes: 'Onayla',
            buttonNo: 'Kapat',
            message: 'Bu işlemi yapmak istediğinize emin misiniz?',
            theme: 'success'
        },*/
        /*request: {
            url: 'http://localhost:4000/pages',
            method:'POST',
            body: {
                id: uuidv4(),
                title: 'namer',
                category: 'ahmet'
            }
        },*/
        onBefore: (state:any) => {
            console.log('Before state--', state)
            /*const mahmut = new Promise((resolve) => {
                setTimeout(() => {
                    resolve('onBefore setTimeout Ends.');

                }, 2000);
            }).then((result) => {
                console.log(result, state);
            })

            return mahmut;

            setTimeout(() => {
                console.log('onBefore setTimeout Ends.', state);

            }, 5000);*/

        },
        onSuccess: (state:any) => {
            // baskaaction()
            toastMessage({message: 'nabver', title: 'Başarılı', overlay: false, messageType:'error', theme:'light'})
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
