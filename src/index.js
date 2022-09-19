import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
// import App from "./redux/index"
import {store, persistor} from './redux/store/index'
import {PersistGate } from 'redux-persist/integration/react';
import {fetchPosts} from "./redux/reducers/index";

store.dispatch(fetchPosts())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Provider store={store}>
    <PersistGate  persistor={persistor}>
    <App />

    </PersistGate>
</Provider>
</BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
