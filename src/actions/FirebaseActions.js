import firebase from 'firebase';

export const createUserDb = (user) => {

    let auth = firebase.auth();

    firebase.database().ref(`/users/${auth.currentUser.uid}/user`)
        .set(user);
};

export const getSavedVideosFromDb = (callback) => {
    let auth = firebase.auth();
    firebase.database().ref(`/users/${auth.currentUser.uid}/video`)
        .on('value', snapshot => callback(snapshot.val()));
};

export const setSavedVideosDb = (state) => {
    let auth = firebase.auth();
    firebase.database().ref(`/users/${auth.currentUser.uid}/video`)
        .set({
            videosForLater: state.videoUser.videosForLater
        });
};



