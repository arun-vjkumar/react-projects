import {createStore, applyMiddleware, combineReducers} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {newsReducer} from "../news/reducer";
import {INewsState} from "../news/types";

const client = axios.create({
    baseURL: "https://newsapi.org/v2",
    responseType: "json",
});

export interface IAppState {
    news: INewsState
}

const rootReducer = combineReducers<IAppState>({
    news: newsReducer
});

export default function configureStore() {
    return createStore(
        rootReducer,
        undefined,
        composeWithDevTools(applyMiddleware(thunk, axiosMiddleware(client)))
    );
}
