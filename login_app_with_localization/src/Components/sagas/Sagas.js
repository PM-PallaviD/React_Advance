import { put, takeEvery } from "redux-saga/effects";
import {
    EDIT_DATA,
    FETCH_DATA,
    STORE_DATA,
    DELETE_DATA,
    ADD_DATA,
} from "./Types";
import axios from "axios";
// for get api request
function* getData() {
    const payload = yield axios.get(
        "https://64281544161067a83b069578.mockapi.io/todoList"
    );
    yield put({ type: STORE_DATA, payload });
}
// for put api request
function* editData(data) {
    yield axios.put(
        `https://64281544161067a83b069578.mockapi.io/todoList/${data.payload.id}`,
        data.payload
    );
    yield getData();
}

// for delete api request
function* deleteData(data) {
    yield axios.delete(
        `https://64281544161067a83b069578.mockapi.io/todoList/${data.payload}`
    );
    yield getData();
}

function* addData(data) {
    console.log(data, "add request");
    yield axios.post(
        `https://64281544161067a83b069578.mockapi.io/todoList`,
        data.payload
    );
    yield getData();
}
// main saga to deside which function have to call
function* MySaga() {
    yield takeEvery(FETCH_DATA, getData);
    yield takeEvery(EDIT_DATA, editData);
    yield takeEvery(DELETE_DATA, deleteData);
    yield takeEvery(ADD_DATA, addData);
}
export default MySaga;
