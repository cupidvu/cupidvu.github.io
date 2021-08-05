import{
    FETCH_COLLECTION_REQUEST,
    FETCH_COLLECTION_SUCCESS,
    FETCH_COLLECTION_FAILURE
} from "./CollectionTypes.js";

export const fetchCollectionRequest = () => {
    return{
        type: FETCH_COLLECTION_REQUEST
    }
};

export const fetchCollectionSuccess = (message) => {
    return{
        type: FETCH_COLLECTION_SUCCESS,
        payload: message
    }
};

export const fetchCollectionFailure = (errors) => {
    return{
        type: FETCH_COLLECTION_FAILURE,
        payload: errors
    }
};
