import React, { useState } from "react";
import Accordion from "./components/Accordion/Accordion";
import Search from "./components/Wikipedia/Search";
import Dropdown from "./components/Dropdown/Dropdown";
import Translate from "./components/Translator/Translate";
import VideoSearch from "./components/VideoSearch/VideoSearch";
import ImageSearch from "./components/ImageSearch/ImageSearch";
import Route from "./Navigation/Route";
import Header from "./Navigation/Header";

const items = [
  { title: "test1", content: "test1" },
  { title: "test2", content: "test2" },
  { title: "test3", content: "test3" },
];
const options = [
  { label: "test1", value: "test1" },
  { label: "test2", value: "test2" },
  { label: "test3", value: "test3" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="test"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
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
