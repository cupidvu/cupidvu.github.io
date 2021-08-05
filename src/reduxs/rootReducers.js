import { combineReducers } from "redux";
import { CategoriesReducers } from "./categories/reduces/CategoriesReducers";
import { CollectionReducers } from "./collections/reduces/CollectionReducers";
import { AnimesFilterReducers, AnimesReducers } from "./animes/reduces/AnimesReducers";
import { AnimeDetailReducers } from "./animes/reduces/AnimeDetailReducers";

const rootReducers = combineReducers({
    categories: CategoriesReducers,
    collections: CollectionReducers,
    animes: AnimesReducers,
    animesFilter: AnimesFilterReducers,
    animeDetails: AnimeDetailReducers
});

export default rootReducers;