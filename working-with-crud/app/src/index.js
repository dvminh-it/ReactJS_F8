import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import reducer from './reducers'
import mySaga from './sagas'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// Mount it on the Store
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger)
)

// Then run the saga
sagaMiddleware.run(mySaga)

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
