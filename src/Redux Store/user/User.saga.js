import {all, call, takeLatest, put} from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './User-action-type';

import { userSignInSuccess, 
        userSignInFailed,
        signOutSuccess,
        signOutFailed, 
        signUpSuccess,
        signUpFailed} from './User.action';

import { getCurrentUser, 
    createUserFromAuth, 
    signInWithGooglePopup, 
    signInAuthUserFromEmailAndPassword,
    createAuthUserFromEmailAndPassword,
    userSignout } from '../../utils/Firebase/Firebase.component';


export function* getSnapshotFromUserAuth(userAuth, additionalinfo){
    try{
        const userSnapshot = yield call(createUserFromAuth, userAuth, additionalinfo);
        yield put(userSignInSuccess({id : userSnapshot.id, ...userSnapshot.data()}));
    }
    catch(error){
        put(userSignInFailed,error);
    }

}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield call(getCurrentUser);
        if(!userAuth){
            return;
        }
        yield call(getSnapshotFromUserAuth, userAuth);
    }
    catch(error)
    {
        yield put(userSignInFailed,error);
    }
}

export function* googleSignIn(){
    try{
        const {user} = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    }
    catch(error){
        yield put(userSignInFailed(error));
    }
}

export function* EmailSignIn({payload :{email, password}}){
    try{
        const {user} = yield call(signInAuthUserFromEmailAndPassword, email, password)
        yield call(getSnapshotFromUserAuth, user);
    }
    catch(error){
        yield put(userSignInFailed(error));
    }
}

export function* SignOutUser(){
    try{
        yield call(userSignout);
        yield put(signOutSuccess());
    }
    catch(error){
        yield put(signOutFailed(error));
    }
}

export function* signUpUser({payload : {email, password, displayname}}){
    try{
        const {user} = yield call(createAuthUserFromEmailAndPassword, email, password);
        yield put(signUpSuccess(user, { displayname }));
    }
    catch(error){
        yield put(signUpFailed(error));
    }
}

export function* signInAfterSignUp({payload : {user, additionalDetails}}){
    yield call(getSnapshotFromUserAuth, user, additionalDetails);
}


export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.USER_GOOGLE_SIGNIN_START, googleSignIn);
}

export function* onSignInWithEmailStart(){
    yield takeLatest(USER_ACTION_TYPES.USER_EMAIL_SIGNIN_START, EmailSignIn);
}

export function* onSignOutStart(){
    yield takeLatest(USER_ACTION_TYPES.USER_SIGNOUT_START, SignOutUser)
}


export function* onSignUpStart(){
    yield takeLatest(USER_ACTION_TYPES.USER_SIGNUP_START, signUpUser);
}

export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.USER_SIGNUP_SUCCESS, signInAfterSignUp);
}

export function* userSaga(){
    yield all([
        call(onCheckUserSession), 
        call(onGoogleSignInStart), 
        call(onSignInWithEmailStart),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
    ]);
}