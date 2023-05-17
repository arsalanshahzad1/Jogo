import React, { useState } from 'react'
import YouTube from 'react-youtube';
const Video = () => {
    const [showVideo, setShowVideo] = useState(false);

  const onVideoEnd = () => {
    setShowVideo(false);
  };

  const onPlayButtonClick = () => {
    setShowVideo(true);
  };
  const videoOpts = {
    // height: '100%',
    // width: '640',
    playerVars: {
        autoplay: 1,
    },
  };
    return (
        <div className="home-section-two desktop">
             {!showVideo && (
        // <button onClick={onPlayButtonClick}>Play Video</button>
        <img className="play-btn" src="/assets/images/play-btn.png" alt="" onClick={onPlayButtonClick}/>
      )}
            {/* <img className="play-btn" src="/assets/images/play-btn.png" alt="" /> */}
            <div>
      {/* {!showVideo && (
        <button onClick={onPlayButtonClick}>Play Video</button>
      )} */}

      {showVideo && (
        <div style={{position : 'relative' , zIndex : '1'}}>
          <YouTube
            videoId="KcnPa-hIMSw"
            opts={videoOpts}
            onEnd={onVideoEnd}
          />
        </div>
      )}
    </div>
        </div>
    )
}

export default Video