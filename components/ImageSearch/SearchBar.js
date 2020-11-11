import React from "react";
class SearchBar extends React.Component {
  state = { input: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
  };
  render() {
    return (
      <div className="ui segment">
        <div onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <div className="ui fluid action input">
              <input
                type="text"
                placeholder="Search..."
                value={this.state.input}
                onChange={(event) =>
                  this.setState({ input: event.target.value })
                }
              />
              <button className="ui button">
                <i className="search icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBar;
