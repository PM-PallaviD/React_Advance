import { ADD_DATA, DELETE_DATA, EDIT_DATA, FETCH_DATA } from "./Types";
// actions to deside action on saga
export const fetch_data = (payload) => {
    return {
        type: FETCH_DATA,
        payload,
    };
};

export const edit_data = (payload) => {
    return {
        type: EDIT_DATA,
        payload,
    };
};

export const delete_data = (payload) => {
    return {
        type: DELETE_DATA,
        payload,
    };
};

export const add_data = (payload) => {
    return {
        type: ADD_DATA,
        payload,
    };
};
