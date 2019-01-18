import * as iziToast from 'izitoast/dist/js/iziToast'
import {Message} from './types'
import {omit, isEmpty} from 'lodash'

export default function (messageOptions: Message): Promise<{ confirm: boolean }> {

    let messageDefault: Message = {
        theme: 'light',
        icon: null,
        title: '',
        confirmMessage: {
            buttonYes: 'Confirm',
            buttonNo: 'Cancel',
            message: 'Are you sure to continue?'
        },
        message: messageOptions.confirmMessage ? messageOptions.confirmMessage.message : '',
        position: 'center',
        progressBar: false,
        progressColor: 'rgb(229, 61, 65)',
        close: true,
        timeout: 5000,
        overlay: true,
        overlayClose: true,
        displayMode: 1,
        target: null,
        zindex: 99999,
        maxWidth: 600,
        messageType: 'show',
    };

    let buttonYes = messageOptions.confirmMessage ? messageOptions.confirmMessage.buttonYes: 'Yes';
    let buttonNo = messageOptions.confirmMessage ? messageOptions.confirmMessage.buttonNo: 'No';

    return new Promise((resolve) => {

        let iziMessage = {
            ...omit(messageDefault, 'confirmMessage'),
            ...omit(messageOptions, 'confirmMessage'),
            buttons: [
                [`<button style="outline: none">${buttonYes}</button>`, function (instance, toast) {
                    instance.hide({
                        transitionOut: 'fadeOutUp',
                        onClosing: function () {
                            resolve({confirm: true});
                        }
                    }, toast, 'buttonName');
                }, true],
                [`<button>${buttonNo}</button>`, function (instance, toast) {
                    instance.hide({
                        transitionOut: 'fadeOutUp',
                        onClosing: function () {
                            resolve({confirm: false});
                        }
                    }, toast, 'buttonName');
                }]
            ]
        };

        if (!messageOptions.confirmMessage && isEmpty(messageOptions.confirmMessage)) {
            iziMessage = omit(iziMessage, 'buttons')
        } else {
            iziMessage = {
                ...iziMessage,
                message: messageOptions.confirmMessage ? messageOptions.confirmMessage.message : ''
            }
        }

        switch (iziMessage.messageType) {
            case 'show':
                iziToast.show(iziMessage);
                break;
            case 'info':
                iziToast.info(iziMessage);
                break;
            case 'success':
                iziToast.success(iziMessage);
                break;
            case 'warning':
                iziToast.warning(iziMessage);
                break;
            case 'error':
                iziToast.error(iziMessage);
                break;
            default:
                iziToast.success(iziMessage);
        }
    })

}
