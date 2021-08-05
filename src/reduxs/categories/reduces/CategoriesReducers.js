
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
} from "../actions/CategoriesTypes.js";

const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const CategoriesReducers = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return{
                ...state,
                loading: true
            };
        case FETCH_CATEGORIES_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            };
        case FETCH_CATEGORIES_FAILURE:
            return{
                loading: false,
                data: "",
                error: action.payload
            };
        default: return state;
    }
}