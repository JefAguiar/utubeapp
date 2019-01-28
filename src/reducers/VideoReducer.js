import {
    SET_VIDEO_DEFAULT,
    SET_VIDEO_SEARCHED,
    SET_VIDEO_SELECTED,
    SET_VIDEO_FOR_LATER,
    UNSAVE_VIDEO_FOR_LATER,
    SET_ALL_VIDEOS_FOR_LATER

} from '../actions/types'

const INITIAL_STATE = {
    videos: [],
    videosForLater: [],
    selectedVideo: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_VIDEO_DEFAULT: return { ...state, ...action.payload }
        case SET_VIDEO_SEARCHED:
            return {
                ...state,
                ...action.payload
            };
        case SET_VIDEO_SELECTED:
            return { ...state, ...action.payload };
        case SET_VIDEO_FOR_LATER: {
            return {
                ...state,
                videosForLater: [...state.videosForLater.filter(v => v.id.videoId !== action.video.id.videoId),
                action.video]
            };
        }
        case UNSAVE_VIDEO_FOR_LATER: {
            return {
                ...state,
                videosForLater: state.videosForLater.filter(v => v.id.videoId !== action.video.id.videoId)
            };
        }
        case SET_ALL_VIDEOS_FOR_LATER: {
            return {
                ...state,
                videosForLater: action.videosForLater || []
            }
        }
        default:
            return state;
    }
};