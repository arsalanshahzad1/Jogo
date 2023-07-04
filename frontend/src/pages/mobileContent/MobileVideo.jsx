import React, { useState } from 'react'
import YouTube from 'react-youtube';

const MobileVideo = () => {
    const [showVideo, setShowVideo] = useState(false);

    const onVideoEnd = () => {
      setShowVideo(false);
    };
  
    const onPlayButtonClick = () => {
      setShowVideo(true);
    };
    const videoOpts = {
    //   height: '200',
      // width: '640',
      playerVars: {
          // autoplay: 1,
      },
    };
      return (
          <div className={`home-section-two `}>
              <div>
  
          <div style={{position : 'relative' , zIndex : '1'}}>
            <YouTube
              videoId="9zHIxAsjFvg"
              opts={videoOpts}
              onEnd={onVideoEnd}
            />
          </div>
      </div>
          </div>
      )
}

export default MobileVideo