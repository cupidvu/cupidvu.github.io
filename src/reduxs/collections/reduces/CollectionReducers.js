
import {
    FETCH_COLLECTION_REQUEST,
    FETCH_COLLECTION_SUCCESS,
    FETCH_COLLECTION_FAILURE
} from "../actions/CollectionTypes.js";

const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const CollectionReducers = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_COLLECTION_REQUEST:
            return{
                ...state,
                loading: true
            };
        case FETCH_COLLECTION_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            };
        case FETCH_COLLECTION_FAILURE:
            return{
                loading: false,
                data: "",
                error: action.payload
            };
        default: return state;
    }
}