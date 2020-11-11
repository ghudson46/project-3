import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed" style={{textAlign: 'center'}}>
        <iframe src={videoSrc} allowFullScreen title="Video player" style={{height: '25rem', width: '50rem', marginTop: '2rem'}} />
      </div>
      <div className="ui segment">
        <h2 className="ui header">{video.snippet.title}</h2>
        {/* <p style={{width: '20%'}}>{video.snippet.description}</p> */}
      </div>
    </div>
  );
};

export default VideoDetail;