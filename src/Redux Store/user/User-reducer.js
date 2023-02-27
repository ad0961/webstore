import { USER_ACTION_TYPES } from "./User-action-type";

const INITIAL_STATE={
    currentUser:null,
    isLoaading: false,
    error:false
};

export const userReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type){
        case USER_ACTION_TYPES.USER_SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser : payload
            }
        case USER_ACTION_TYPES.USER_SIGNIN_FAILED:
            return {
                ...state,
                error : payload
            }
        case USER_ACTION_TYPES.USER_SIGNOUT_SUCCESS:
            return{
                ...state,
                currentUser : null
            }
        case USER_ACTION_TYPES.USER_SIGNOUT_FAILED:
            return{
                ...state,
                error : payload
            }
        case USER_ACTION_TYPES.USER_SIGNUP_SUCCESS:
            return{
                ...state,
                user : payload
            }
        case USER_ACTION_TYPES.USER_SIGNUP_FAILED:
            return{
                ...state,
                error: payload
            }
        default :
            return state;
    }
}

