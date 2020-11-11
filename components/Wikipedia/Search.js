import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
function Search() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [search]);

  useEffect(() => {
    async function searching() {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedSearch,
        },
      });
      setSearchResults(data.query.search);
    }
    if (debouncedSearch) {
      searching();
    }
  }, [debouncedSearch]);

  const renderedSearchResults = searchResults.map(
    ({ title, snippet, pageid }) => {
      return (
        <div key={pageid} className="item">
          <div className="ui raised very padded segment">
            <button
              onClick={() =>
                window.open(
                  `https://en.wikipedia.org?curid=${pageid}`,
                  "_blank"
                )
              }
              className="ui right floated inverted blue button"
            >
              <i className="external alternate icon" />
              Open
            </button>

            <div className="middle aligned content">
              <h3 className="ui medium header">
                <i className="blue wikipedia w icon"></i>
                {title}
              </h3>
              <div className="description content-custom-style">
                <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label>Enter Search Term</label>
            <div className="ui fluid action input">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(evt) => setSearch(evt.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ui celled list">{renderedSearchResults}</div>
    </div>
  );
}

export default Search;
