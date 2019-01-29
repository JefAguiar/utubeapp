import {
    USER_LOGIN_SUCCESS,
    USER_RESET_DEFAULT
} from './types';
import firebase from 'firebase'
import { createUserDb, getSavedVideosFromDb } from './FirebaseActions';
import { setVideoDefault, setAllSavedVideos } from './VideoActions';

export const userLoginSuccess = user => {
    const {
        displayName,
        email,
        phoneNumber,
        photoURL,
        uid
    } = user.providerData[0];

    return {
        type: USER_LOGIN_SUCCESS,
        payload: {
            displayName,
            email,
            phoneNumber,
            photoURL,
            uid,
            isSignedIn: true
        }
    };
};

export const userSetDefault = () => {
    return {
        type: USER_RESET_DEFAULT,
        payload: {
            isSignedIn: false,
            displayName: '',
            email: '',
            phoneNumber: '',
            photoURL: '',
            uid: ''
        }
    };
};

export const userLogOut = () => dispatch => {
    firebase.auth().signOut().then(() => {
        dispatch(userSetDefault());
        dispatch(setVideoDefault());
    });
};

export const userOnAuthStateChange = () => dispatch => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            dispatch(userLoginSuccess(user));
            createUserDb(user);
            getSavedVideosFromDb(snapshot => dispatch(setAllSavedVideos(snapshot)));
        }
        else
            dispatch(userSetDefault());
    });
};
