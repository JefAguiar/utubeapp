import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import Timer from './Timer';
import {
    videoSearch,
    userLogOut
} from '../actions';

import {
    MDBContainer,
    MDBRow,
    MDBCol, MDBCard
} from 'mdbreact';

const Home = (props) => {
    const {
        videoSearch,
        userLogOut,
        selectedVideo,
        videosForLater,
        videos
    } = props;
    
    return (
        <MDBContainer>
            <br />
            <MDBRow>
                <MDBCol md="8">
                    <SearchBar onSearchTermChange={searchTerm => videoSearch(searchTerm)} />
                </MDBCol>
                <MDBCol md="2">
                   <Timer />
                </MDBCol>
                <MDBCol md="2">
                    <button onClick={() => userLogOut()} className="btn btn-danger">Sign Out!</button>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="6">
                    <MDBCard>
                        <VideoDetail video={selectedVideo} />
                    </MDBCard>
                    <br />
                    <MDBCard>
                        <MDBCard>
                            <div className="details">
                                <div style={{ alignItems: 'center' }}>Videos to watch later...</div>
                            </div>
                        </MDBCard>
                        <VideoList videos={videosForLater} />
                    </MDBCard>
                </MDBCol>
                <MDBCol md="6">
                    <VideoList videos={videos} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
};

const mapStateToProps = (state) => {
    const { videos, selectedVideo, videosForLater } = state.videoUser;
    return {
        videos,
        selectedVideo,
        videosForLater
    };
};

export default
    connect(mapStateToProps, {
        videoSearch,
        userLogOut
    })(Home);