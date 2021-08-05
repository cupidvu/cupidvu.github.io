
import { 
    fetchAnimesFailure, 
    fetchAnimesSuccess, 
    fetchAnimesRequest, 
    fetchAnimesFilterRequest,
    fetchAnimesFilterSuccess,
    fetchAnimesFilterFailure
} from "../actions/AnimesActions";

import { requestGet, requestPost } from "../../../apis/axiosClient";

import { 
    fetchAnimeDetailFailure, 
    fetchAnimeDetailRequest, 
    fetchAnimeDetailSuccess
} from "../actions/AnimeDetailActions";

export const GetAnimes = () =>{
    return async dispatch => {
        dispatch(fetchAnimesRequest());

        const response = await requestGet("/api/animes");
        if (response.code > 204) {
            dispatch(fetchAnimesFailure("Error"));
        }
        else {
            dispatch(fetchAnimesSuccess(response.data));
        }
    }
}

export const GetAnimesFilter = (keyword, cateFilters = [], collectFilters = []) =>{
    return async dispatch => {

        dispatch(fetchAnimesFilterRequest());
        var response = {};
        
        var path = "/api/animes";
        if(keyword !== "" && keyword !== undefined && keyword !== null)
        {
            path += `?keyword=${keyword}`
        }
        var data = {
            CategoryFilters: cateFilters,
            CollectFilters: collectFilters
        };

        response = await requestPost(path, data);

        if (response.code > 204) {
            dispatch(fetchAnimesFilterFailure("Error"));
        }
        else {
            dispatch(fetchAnimesFilterSuccess(response.data));
        }
    }
}

export const GetAnimeDetail = (animeKey) =>{

    return async dispatch => {
        dispatch(fetchAnimeDetailRequest());

        const response = await requestGet("/api/animes/" + animeKey);

        if (response.code > 204) {
            dispatch(fetchAnimeDetailFailure("Error"));
        }
        else {
            dispatch(fetchAnimeDetailSuccess(response.data));
        }
    }
}

export const UpdateViewAnime = (animeKey) => {
    return requestGet("/api/animes/" + animeKey + "/views");
}

export const UpdateViewAnimeDetail = (animeKey, animeDetailKey) => {
    return requestGet("/api/animes/" + animeKey + "/" + animeDetailKey + "/views");
}
