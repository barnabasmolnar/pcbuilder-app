import React from 'react';
import ReactDOM from 'react-dom';

import SelectComponents from './SelectComponents/SelectComponents';
import Main from './Main/Main';

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from './reducers/index';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}><Main /></Provider>,
    document.getElementById('root')
);
registerServiceWorker();
