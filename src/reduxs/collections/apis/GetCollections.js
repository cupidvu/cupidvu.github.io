
import { fetchCollectionRequest, fetchCollectionSuccess, fetchCollectionFailure } from "../actions/CollectionActions";
import { requestGet } from "../../../apis/axiosClient";

export const GetCollections = () =>{
    return async dispatch => {
        dispatch(fetchCollectionRequest());

        const response = await requestGet("/api/collections");
        if (response.code > 204) {
            dispatch(fetchCollectionFailure("Error"));
        }
        else {
            dispatch(fetchCollectionSuccess(response.data));
        }
    }
}