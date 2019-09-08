import {combineReducers} from 'redux';
import {types} from "./types";

export const HomePageReducer = (state = {}, action) => {
    switch (action.type) {
        case types.SET_YEAR_VALUE:
            return {...state, yearValue: action.payload};
        case types.SET_OPTION_DATA:
            return {...state, optionObj: action.payload};
        case types.SET_NEW_LIST_DATA:
            return {...state, newFormData: action.payload};
            case types.GET_LAYOUT_STATE:
            return {...state, layOutIsChanged: action.payload};
        default:
            return state;
    }
};


export default combineReducers({
    HomePageReducer,
});
