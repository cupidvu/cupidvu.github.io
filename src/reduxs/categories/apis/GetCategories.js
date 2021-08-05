
import { fetchCategoriesRequest, fetchCategoriesSuccess, fetchCategoriesFailure } from "../actions/CategoriesActions";
import { requestGet } from "../../../apis/axiosClient";

export const GetCategories = () =>{
    return async dispatch => {
        dispatch(fetchCategoriesRequest());

        const response = await requestGet("/api/categories");
        if (response.code > 204) {
            dispatch(fetchCategoriesFailure("Error"));
        }
        else {
            dispatch(fetchCategoriesSuccess(response.data));
        }
    }
}