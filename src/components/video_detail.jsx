import React, { Component } from 'react';

export default class VideoDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.video)
    return (this.props.video) ? (
      <div className="col-md-8">
        <a href="#" className="thumbnail">
          <img src={this.props.video.snippet.thumbnails.high.url} alt="react-video" />
        </a>
        <h3>{this.props.video.snippet.title}</h3>
        <p>{this.props.video.snippet.description}</p>
      </div>
    ) : null;
  }
}
