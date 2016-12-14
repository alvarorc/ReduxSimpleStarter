import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }
  handleSearchInput(e) {
    this.setState({search: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.search);
    if(this.state.search.trim() !== ''){
      this.props.handleSearch(this.state.search);
    }
  }
  render() {
    return (
      <div className="search-bar col-md-6 col-md-offset-3">
        <form className="input-group" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            className="form-control"
            placeholder="Search for..."
            onChange={this.handleSearchInput.bind(this)}
            value={this.state.search} />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Search</button>
          </span>
        </form>
      </div>
    )
  }
}
