import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { sagaReducer } from "./SagaReducer";
import MySaga from "./Sagas";
const sagaMiddleWare = createSagaMiddleware(); // creating constant of middleware

//creating store for globaly
export const store = configureStore({
    reducer: sagaReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare)
});

//declaring which function run through saga
sagaMiddleWare.run(MySaga)