// import * as uuidv4 from 'uuid/v4';

import {krax, /*toastMessage, getState*/} from '../krax'

// interface Todo {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean
// }

// type TodoList = Todo;

/*export const add = async () => {


    await krax<TodoList>({
        name: 'getTodos.ahmet[0].a',
        request: {
            url: 'https://api.github.com/repos/mehmetokanozcan/react-krax',
            method: 'GET',
            mode: 'cors',
            isJson: true,
            isFile: true,
            isForm: true,
            body: {
                name: 'poklan',
                email: 'asdf',
                files: []
            },
            headers: {
                "Content-Tyasdape": "sdfsdfsdfsdf",
            },
            cache: "no-cache",
            redirect: "follow",
            referrer: "",
            credentials: "same-origin"
        },
        // returnData: TodoList,
        /!*payload: {
            userId: 2342,
            id: 234234,
            title: 'sdfsdf',
            completed: false
        },*!/
        confirm: {
            buttonYes: 'Onayla',
            buttonNo: 'Kapat',
            message: 'Bu işlemi yapmak istediğinize emin misiniz?',
            theme: 'success'
        },
        /!*request: {
            url: 'http://localhost:4000/pages',
            method:'POST',
            body: {
                id: uuidv4(),
                title: 'namer',
                category: 'ahmet'
            }
        },*!/
        onBefore: (/!*state:any*!/) => {
            /!*const mahmut = new Promise((resolve) => {
                setTimeout(() => {
                    resolve('onBefore setTimeout Ends.');

                }, 2000);
            }).then((result) => {
                console.log(result, state);
            })

            return mahmut;*!/
        },
        onSuccess: (/!*state:any*!/) => {
            // baskaaction()
            //toastMessage({message: 'nabver', title: 'Başarılı', overlay: false, messageType:'error', theme:'light'})
            // console.log('SUCCESS', state);

        },
        onError: (/!*state:any, error:any*!/) => {
            // baskaaction()
            // console.log('!!', state, error);

        }

    })

    /!*await krax<TodoList>({
        name: 'getError',
        request: {
            url: 'https://api.github.com/repos/mehmetokanozcan/react-kraxs',
            method:'GET'
        }
    }).then(() => {
        return krax<TodoList>({
            name: 'sadfasdfasdf',
            request: {
                url: 'http://localhost:4000/pages',
                method:'GET'
            },
            onSuccess : (_state) => {
                toastMessage({message:'Başarılı'})
            }
        })
    });*!/

    /!*await krax({
        reset: ['getError']
    });*!/

    await krax<TodoList>({
        name: 'getTodos.ahmet[1]',
        /!*confirm: {
            buttonYes: 'Onayla',
            buttonNo: 'Kapat',
            message: 'Bu işlemi yapmak istediğinize emin misiniz?',
            theme: 'success'
        },*!/
        request: {
            url: 'http://localhost:4000/pages',
            method: 'POST',
            // isFormWithoutFile: true,
            // isFormWithFile: true,
            isJson: true,
            body: {
                id: uuidv4(),
                title: 'namer',
                category: 'ahmet'
            }
        },
        onSuccess: (_state) => {
            toastMessage({message: 'adsfasdasd'})
        }


    });


    console.log('----GetState', getState())

};*/

/*function baskaaction() {
    krax({
        name: 'ssss',
        payload: 'asdasdas'
        /!*onSuccess: ( state, payload ) => {
            console.log('--->>>>>---->>>>', state, payload)
        }*!/
    });
}*/


export const fileadd = () => {
    return krax({
        name: 'ssss',
        request: {
            isJson: true,
            url: 'https://api.github.com/repos/mehmetokanozcan/react-krax',
            // isWriteToStore: true,
            method: 'GET',

        },
        confirm: {
            buttonYes: 'Onayla',
            buttonNo: 'Kapat',
            message: 'Bu işlemi yapmak istediğinize emin misiniz?',
            theme: 'success'
        }
    });
}
