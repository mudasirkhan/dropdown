import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import dropDownOptions from './reducers'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const initialState = { options : [
        'India',
        'Pakistan',
        'New Zealand',
        'Bangladesh',
        'UAE',
    ]}
    const store = createStore(dropDownOptions,initialState)
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
