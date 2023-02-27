import {all, call} from 'redux-saga/effects';
import { categoriesSaga } from './categories/categories.saga';
import { userSaga } from './user/User.saga';

export function* rootsaga(){
    yield all([call(categoriesSaga), call(userSaga)]);
};