import "./globals";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {RouterComponent} from "./router";
import "app/css/style.pcss"
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <RouterComponent />
    </Provider>
    ,
    document.getElementById("app")
);
