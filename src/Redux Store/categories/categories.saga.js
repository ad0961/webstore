import {all, call, takeLatest, put } from 'redux-saga/effects';
import { getCollectionsAndDocuments } from '../../utils/Firebase/Firebase.component';

import { fetchCategoriesFailed, fetchCategoriesSuccess } from './categories.action';
import { CATEGORY_ACTION_TYPES } from './categories.action-type';

export function* fetchCategoriesAsync () {
   try{
    const categories = yield call(getCollectionsAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess(categories));
   } 
   catch(error){
    yield put(fetchCategoriesFailed(error));
   }
}

export function* onFetchCategories(){
    yield takeLatest(
        CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync
    )
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)]);
}