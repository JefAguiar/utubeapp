import React from 'react';
import { connect } from 'react-redux';
import { setVideoSelected,
         setVideoForLater,
         unsaveVideoForLater
          } from '../actions';
import {
    MDBRow,
    MDBCol, MDBCard, MDBCardBody
} from 'mdbreact';

const VideoListItem = (props) => {
    const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    
    const checkIfVideoIsSaved = (video) => {
        return props.videosForLater.map(v =>  v.id.videoId).indexOf(video.id.videoId) > -1;
    };

    const renderButton = (video) => {
       
        if(props.videosForLater.length === 0 || !checkIfVideoIsSaved(video))
        {
           return(<button onClick={() => props.setVideoForLater(video)} className="btn btn-primary">Watch later</button>);
        }
        return (<button onClick={() => props.unsaveVideoForLater(video)} className="btn btn-success">Saved for later</button>);
    }

    return (
        <MDBRow>
            <MDBCol md="9">
                <MDBCard>
                    <MDBCardBody onClick={() => props.setVideoSelected(video)} className="video-list media">
                    <div className="media-left"  >
                            <img alt="" className="media-object" src={imageUrl} />
                        </div>
                        <div className="media-body">
                            <div className="media-heading">{video.snippet.title}</div>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol md="3">
                {renderButton(video)}            
            </MDBCol>
        </MDBRow>
    );
};


const mapStateToProps = (state, meProps) => {
    const { video } = meProps;
    const { videosForLater } = state.videoUser;;
    
    return {
      video,
      videosForLater
    };
 };
 
 export default connect(mapStateToProps, {
    setVideoSelected,
    setVideoForLater,
    unsaveVideoForLater
 })(VideoListItem);