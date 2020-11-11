import React from "react";
import Accordion from "./components/Accordion/Accordion";
import Search from "./components/Wikipedia/Search";
import Translate from "./components/Translator/Translate";
import VideoSearch from "./components/VideoSearch/VideoSearch";
import ImageSearch from "./components/ImageSearch/ImageSearch";
import Route from "./Navigation/Route";
import Header from "./Navigation/Header";

const descriptions = [
  {
    title: "Translation App",
    content:
      "This React app uses the  Microsoft Azure Translator API to provide translation from one language to another.",
  },
  {
    title: "Wiki Search App",
    content:
      "This React app uses the Wikipedia API to search for queries in wiki articles. Rendered results highlight the matched query in found wiki articles.",
  },
  {
    title: "Video Search App",
    content:
      "This React app uses the YouTube API to search for videos upon the user's query and rendering the results by embedding video directly on a page.",
  },
  {
    title: "Image Search App",
    content:
      "This React app uses Unsplash API to search for images and render them.",
  },
];

export default () => {
  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={descriptions} />
      </Route>
      <Route path="/wiki">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/VideoSearch">
        <VideoSearch />
      </Route>
      <Route path="/ImageSearch">
        <ImageSearch />
      </Route>
    </div>
  );
};
