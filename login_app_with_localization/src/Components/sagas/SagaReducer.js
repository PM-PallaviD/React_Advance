import { STORE_DATA } from "./Types";

const initialState = [];
// reducer for storing the api fetched data through saga 
export const sagaReducer = (state = initialState, action) => {

    switch (action.type) {
        case STORE_DATA:
            console.log("switch", action.payload);
            return {
                ...state,
                state: action.payload,
            };

        default:
            return state;
    }
};
