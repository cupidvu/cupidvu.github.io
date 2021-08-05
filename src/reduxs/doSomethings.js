import { GetAnimeDetail, GetAnimes, UpdateViewAnime, UpdateViewAnimeDetail } from "./animes/apis/GetAnimes";
import { GetCategories } from "./categories/apis/GetCategories";
import { GetCollections } from "./collections/apis/GetCollections";

export function doSomethings(){
    return dispatch => Promise.all([
        dispatch(GetAnimes()),
        dispatch(GetCategories()),
        dispatch(GetCollections()),
    ]);
}

export function animeDetails(animeKey){
    return dispatch => Promise.all([
        dispatch(GetAnimeDetail(animeKey)),
        window.scroll(0, 0)
    ])
}

export function updateView(animeKey, animeDetailKey){
    
    return Promise.all([
        UpdateViewAnime(animeKey),
        UpdateViewAnimeDetail(animeKey, animeDetailKey)
    ])
}