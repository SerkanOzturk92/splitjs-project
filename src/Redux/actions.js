import {types} from "./types";

export const setYearValue = (yearValue) => {
    return {
        type: types.SET_YEAR_VALUE,
        payload: yearValue
    }
};

export const setOptionData = (optionObj) => {
    return {
        type: types.SET_OPTION_DATA,
        payload: optionObj
    }
};

export const setNewListData = (newListData) => {
    return {
        type: types.SET_NEW_LIST_DATA,
        payload: newListData
    }
};

export const setLayOutState = (layOutIsChanged) => {
    return {
        type: types.GET_LAYOUT_STATE,
        payload: layOutIsChanged
    }
};
