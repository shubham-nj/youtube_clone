import React from "react";
import { Card } from "react-bootstrap";
const VideoDetail = ({ video }) => {
  if (!video)
    return (
      <h1 style={{ color: "#ff9900" }}>
        Youtube got fucked and I came into existence!
      </h1>
    );
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(videoSrc);
  return (
    <Card style={{ width: "100%", height: "650px" }}>
      <Card.Body>
        <iframe
          frameBorder="0"
          height="65%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
        <Card.Title>
          {video.snippet.title}-{video.snippet.channelTitle}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {video.snippet.channelTitle}
        </Card.Subtitle>
        <Card.Subtitle>{video.snippet.description}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default VideoDetail;
