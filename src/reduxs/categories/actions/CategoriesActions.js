import{
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
} from "./CategoriesTypes.js";

export const fetchCategoriesRequest = () => {
    return{
        type: FETCH_CATEGORIES_REQUEST
    }
};

export const fetchCategoriesSuccess = (message) => {
    return{
        type: FETCH_CATEGORIES_SUCCESS,
        payload: message
    }
};

export const fetchCategoriesFailure = (errors) => {
    return{
        type: FETCH_CATEGORIES_FAILURE,
        payload: errors
    }
};
