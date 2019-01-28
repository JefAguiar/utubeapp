import React from 'react';
import VideoListItem from './VideoListItem';
import {
   MDBCard
} from 'mdbreact';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem      
                key={video.etag} 
                video={video}/>
        );
    });

    return (
        <MDBCard className="col-md-12 list-group">
            {videoItems}
        </MDBCard>
    );
};

export default VideoList;