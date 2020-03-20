import React from "react";
import { Card } from "react-bootstrap";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Card style={{ width: "100%", height: "325px", marginBottom: "10px" }}>
      <Card.Body
        onClick={() => {
          onVideoSelect(video);
        }}
      >
        <Card.Img
          variant="top"
          src={video.snippet.thumbnails.medium.url}
          alt="Thumbnail unavailable"
          style={{ width: "100%", height: "50%", marginBottom: "25px" }}
        />
        <Card.Subtitle style={{ marginBottom: "5px" }}>
          {video.snippet.title}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {video.snippet.channelTitle}
        </Card.Subtitle>

        <Card.Link href="#">Watch</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default VideoItem;
