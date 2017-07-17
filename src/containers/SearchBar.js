import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      term: ''
    };
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <form className="input-group">
        <input
          onChange={this.onInputChange}
          value={this.state.term}
          type="text"
          className="form-control"
          placeholder="Get a five-day forecast in your favorite cities"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
