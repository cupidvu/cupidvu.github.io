import{
    FETCH_ANIMEDETAIL_REQUEST,
    FETCH_ANIMEDETAIL_SUCCESS,
    FETCH_ANIMEDETAIL_FAILURE
} from "./AnimeDetailTypes.js";

export const fetchAnimeDetailRequest = () => {
    return{
        type: FETCH_ANIMEDETAIL_REQUEST
    }
};

export const fetchAnimeDetailSuccess = (message) => {
    return{
        type: FETCH_ANIMEDETAIL_SUCCESS,
        payload: message
    }
};

export const fetchAnimeDetailFailure = (errors) => {
    return{
        type: FETCH_ANIMEDETAIL_FAILURE,
        payload: errors
    }
};
