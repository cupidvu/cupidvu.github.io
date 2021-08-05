import{
    FETCH_ANIMES_REQUEST,
    FETCH_ANIMES_SUCCESS,
    FETCH_ANIMES_FAILURE,
    FETCH_ANIMES_FILTER_FAILURE,
    FETCH_ANIMES_FILTER_SUCCESS,
    FETCH_ANIMES_FILTER_REQUEST
} from "./AnimesTypes.js";

export const fetchAnimesRequest = () => {
    return{
        type: FETCH_ANIMES_REQUEST
    }
};

export const fetchAnimesSuccess = (message) => {
    return{
        type: FETCH_ANIMES_SUCCESS,
        payload: message
    }
};

export const fetchAnimesFailure = (errors) => {
    return{
        type: FETCH_ANIMES_FAILURE,
        payload: errors
    }
};

export const fetchAnimesFilterRequest = () => {
    return{
        type: FETCH_ANIMES_FILTER_REQUEST
    }
};

export const fetchAnimesFilterSuccess = (message) => {
    return{
        type: FETCH_ANIMES_FILTER_SUCCESS,
        payload: message
    }
};

export const fetchAnimesFilterFailure = (errors) => {
    return{
        type: FETCH_ANIMES_FILTER_FAILURE,
        payload: errors
    }
};
