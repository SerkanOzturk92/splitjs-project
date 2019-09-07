import { combineReducers } from 'redux';
import {types} from "./types";

export const HomePageReducer = (state = {}, action) => {
    switch (action.type) {
        case types.SET_YEAR_VALUE:
            return { ...state, yearValue: action.payload };
        default:
            return state;
    }
};


export default combineReducers({
    HomePageReducer,
});
