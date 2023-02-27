import { createAction } from "../../utils/Reducer/Reducer.utils";
import { USER_ACTION_TYPES } from "./User-action-type";

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const userEmailSigninStart = (email, password) => createAction(USER_ACTION_TYPES.USER_EMAIL_SIGNIN_START, {email,password});

export const userGoogleSigninStart = () => createAction(USER_ACTION_TYPES.USER_GOOGLE_SIGNIN_START);

export const userSignInSuccess = (user) => createAction(USER_ACTION_TYPES.USER_SIGNIN_SUCCESS, user);

export const userSignInFailed = (error) => createAction(USER_ACTION_TYPES.USER_SIGNIN_FAILED, error);

export const signOutStart = () => createAction(USER_ACTION_TYPES.USER_SIGNOUT_START);

export const signOutSuccess = () => createAction(USER_ACTION_TYPES.USER_SIGNOUT_SUCCESS);

export const signOutFailed = (error) => createAction(USER_ACTION_TYPES.USER_SIGNOUT_FAILED, error);

export const signUpStart = (email, password, displayName) => createAction(USER_ACTION_TYPES.USER_SIGNUP_START, {email, password, displayName});

export const signUpSuccess = (user, additionalDetails) => createAction(USER_ACTION_TYPES.USER_SIGNUP_SUCCESS, {user, additionalDetails});

export const signUpFailed = (error) => createAction(USER_ACTION_TYPES.USER_SIGNUP_FAILED, error);
