import React from "react";
import { SearchBar, VideoDetail, VideoList } from "./components";
import { Container, Row, Col } from "react-bootstrap";
import youtube from "./api/youtube";
import image from "./components/myimage.png";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 16,
        key: "put your key here",
        q: searchTerm
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <center>
        <Container fluid>
          <div>
            <img
              src={image}
              alt="ShuTube"
              style={{ width: "100%", height: "200px" }}
            />
          </div>
          <div>
            <SearchBar onFormSubmit={this.handleSubmit} />
          </div>
          <Row
            className="justify-content-md-center"
            style={{ height: "700px" }}
          >
            <Col xs lg="true">
              <VideoDetail video={selectedVideo} />
            </Col>
          </Row>
          <Col>
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          </Col>
        </Container>
      </center>
    );
  }
}
export default App;
