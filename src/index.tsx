import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from './krax';
import App from './App';


ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement,
);
