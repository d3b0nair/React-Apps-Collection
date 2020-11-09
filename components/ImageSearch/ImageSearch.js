import React from "react";
import unsplashAPI from "./API/unsplashAPI";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class ImageSearch extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (input) => {
    const res = await unsplashAPI.get("/search/photos", {
      params: {
        query: input,
      },
    });
    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default ImageSearch;