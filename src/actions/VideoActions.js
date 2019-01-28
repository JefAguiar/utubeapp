import {
    SET_VIDEO_SEARCHED,
    SET_VIDEO_SELECTED,
    SET_VIDEO_FOR_LATER,
    UNSAVE_VIDEO_FOR_LATER,
    SET_ALL_VIDEOS_FOR_LATER,
    SET_VIDEO_DEFAULT
} from './types';

import { setSavedVideosDb } from './FirebaseActions';
import YTSearch from 'youtube-api-search';
import config from '../config.json';

export const setVideoDefault = () => {
    return {
        type: SET_VIDEO_DEFAULT,
        payload: {
            videos: [],
            videosForLater: [],
            selectedVideo: null
        }
    };
};

const setVideoSearched = videos => {
    return {
        type: SET_VIDEO_SEARCHED,
        payload: {
            videos,
            selectedVideo: videos[0]
        }
    };
};

export const videoSearch = searchTerm => {
    
    const API_KEY = config.googleApiConfig.apiKey;

    return (dispatch) => {
        YTSearch({ key: API_KEY, term: searchTerm }, (videos) => dispatch(setVideoSearched(videos)));
    };
};

export const setVideoSelected = video => {
    return {
        type: SET_VIDEO_SELECTED,
        payload: {
            selectedVideo: video
        }
    };
};

export const setVideoForLater = video => (dispatch, getState) => {
        dispatch({
            type: SET_VIDEO_FOR_LATER,
            video
        });

        setSavedVideosDb(getState());
};

export const unsaveVideoForLater = video => (dispatch, getState) => {
    dispatch({
        type: UNSAVE_VIDEO_FOR_LATER,
        video
    });

    setSavedVideosDb(getState());
};

export const setAllSavedVideos = videosForLater => {
    return {
        type: SET_ALL_VIDEOS_FOR_LATER,
        videosForLater
    };
};