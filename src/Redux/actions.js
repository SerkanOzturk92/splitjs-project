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
