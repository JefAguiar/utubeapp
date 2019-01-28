import firebase from 'firebase';
import { setAllSavedVideos } from './VideoActions';

export const createUserDb = (user) => {

    let auth = firebase.auth();

    const { displayName,
        email,
        phoneNumber,
        photoURL,
        uid } = user;

    firebase.database().ref(`/users/${auth.currentUser.uid}/user`)
        .set({
            displayName,
            email,
            phoneNumber,
            photoURL,
            uid
        });
};

export const getSavedVideosFromDb = (dispatch) => {
    let auth = firebase.auth();
    firebase.database().ref(`/users/${auth.currentUser.uid}/video`)
        .on('value', snapshot => {
            if (snapshot.val())
                dispatch(setAllSavedVideos(snapshot.val().videosForLater));
        });
};

export const setSavedVideosDb = (state) => {
    let auth = firebase.auth();
    firebase.database().ref(`/users/${auth.currentUser.uid}/video`)
        .set({
            videosForLater: state.videoUser.videosForLater
        });
};



