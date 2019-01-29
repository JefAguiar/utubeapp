import firebase from 'firebase';

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

export const getSavedVideosFromDb = (callback) => {
    let auth = firebase.auth();
    firebase.database().ref(`/users/${auth.currentUser.uid}/video`)
        .on('value', snapshot => {
            if (snapshot.val()) callback(snapshot.val());
        });
};

export const setSavedVideosDb = (state) => {
    let auth = firebase.auth();
    firebase.database().ref(`/users/${auth.currentUser.uid}/video`)
        .set({
            videosForLater: state.videoUser.videosForLater
        });
};



