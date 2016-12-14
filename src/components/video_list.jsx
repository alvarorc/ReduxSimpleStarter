import React, { Component } from 'react';

export default class VideoList extends Component {
  render() {
    console.log(this.props.videoList)
    return (
      <div className="list-group col-md-4">
        <a href="#" className="list-group-item">
          <img src="https://i.ytimg.com/vi/T7jC3LDlLi8/default.jpg" alt="some img"/>
          <h4 className="list-group-item-heading">List group item heading</h4>
          <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </a>
        <a href="#" className="list-group-item">
          <h4 className="list-group-item-heading">List group item heading</h4>
          <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </a>
        <a href="#" className="list-group-item">
          <h4 className="list-group-item-heading">List group item heading</h4>
          <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </a>
      </div>
    )
  }
}
