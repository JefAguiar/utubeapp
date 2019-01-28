import {
    USER_LOGIN_SUCCESS,
    USER_RESET_DEFAULT
} from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: false,
    displayName: '',
    email: '',
    phoneNumber: '',
    photoURL: '',
    uid: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return { ...state, ...action.payload };
        case USER_RESET_DEFAULT:
            return { ...state, ...INITIAL_STATE };
        default:
            return state;
    }
};