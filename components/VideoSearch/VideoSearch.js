import React from "react";
import SearchBar from "./SearchBar";
import YouTubeAPI from "./API/YouTubeAPI";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class VideoSearch extends React.Component {
  state = { videoList: [], selectedVideo: null };
  onInputSubmit = async (input) => {
    const res = await YouTubeAPI.get("/search", { params: { q: input } });
    this.setState({
      videoList: res.data.items,
      selectedVideo: res.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  componentDidMount() {
    this.onInputSubmit("trending");
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchBar onInputSubmit={this.onInputSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videoList}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoSearch;
