
import {
    FETCH_ANIMES_REQUEST,
    FETCH_ANIMES_SUCCESS,
    FETCH_ANIMES_FAILURE,
    FETCH_ANIMES_FILTER_REQUEST,
    FETCH_ANIMES_FILTER_SUCCESS,
    FETCH_ANIMES_FILTER_FAILURE
} from "../actions/AnimesTypes.js";

const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const AnimesReducers = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_ANIMES_REQUEST:
            return{
                ...state,
                loading: true
            };
        case FETCH_ANIMES_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            };
        case FETCH_ANIMES_FAILURE:
            return{
                loading: false,
                data: "",
                error: action.payload
            };
        default: return state;
    }
}

export const AnimesFilterReducers = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_ANIMES_FILTER_REQUEST:
            return{
                ...state,
                loading: true
            };
        case FETCH_ANIMES_FILTER_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            };
        case FETCH_ANIMES_FILTER_FAILURE:
            return{
                loading: false,
                data: "",
                error: action.payload
            };
        default: return state;
    }
}