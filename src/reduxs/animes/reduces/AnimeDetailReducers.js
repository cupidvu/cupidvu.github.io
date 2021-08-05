
import {
    FETCH_ANIMEDETAIL_REQUEST,
    FETCH_ANIMEDETAIL_SUCCESS,
    FETCH_ANIMEDETAIL_FAILURE
} from "../actions/AnimeDetailTypes";

const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const AnimeDetailReducers = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_ANIMEDETAIL_REQUEST:
            return{
                ...state,
                loading: true
            };
        case FETCH_ANIMEDETAIL_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            };
        case FETCH_ANIMEDETAIL_FAILURE:
            return{
                loading: false,
                data: "",
                error: action.payload
            };
        default: return state;
    }
}