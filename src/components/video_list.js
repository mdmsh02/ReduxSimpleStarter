import React from 'react';

const VideoList = (props) => {
    return (
        <ul className="col-md4 list-group">
            {props.videos.length}
        </ul>    
    )

}
export default VideoList;