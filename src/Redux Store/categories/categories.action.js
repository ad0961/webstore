import { createAction } from "../../utils/Reducer/Reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./categories.action-type";
import { getCollectionsAndDocuments } from "../../utils/Firebase/Firebase.component";

export const fetchCategoriesStart= () =>{
       return  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);
}

export const fetchCategoriesSuccess = (categoriesArray) =>{
        return  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
 }

export const fetchCategoriesFailed = (error) =>{
        return  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_Failed, error);
 }

// export const thunkFetchCategoriesAsync = () => async (dispatch) => {
//         dispatch(fetchCategoriesStart());
//        try{
//         const categories = await getCollectionsAndDocuments();
//         dispatch(fetchCategoriesSuccess(categories));
//        } 
//        catch(error){
//         dispatch(fetchCategoriesFailed(error));
//        }
// }