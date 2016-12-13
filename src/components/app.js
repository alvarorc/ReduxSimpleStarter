import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoDetail from './video_detail';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="panel panel-default">
          <div className="panel-body">
            <SearchBar />
            <VideoDetail />
          </div>
        </div>
      </div>
    );
  }
}
