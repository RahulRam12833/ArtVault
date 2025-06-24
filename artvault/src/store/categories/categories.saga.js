import {takeLatest,all,call,put} from 'redux-saga/effects';

import { getCategoriesandDocs } from '../../utilities/firebase/firebase.utils';
import { fetchCategoriesSuccess,fetchCategoriesFailed } from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
    try {   
        const categoriesArray = yield call(getCategoriesandDocs, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray)); //disptach equivalent in saga
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    );
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)]);
}