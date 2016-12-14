import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoDetail from './video_detail';
import VideoList from './video_list';
import YTSearch from 'youtube-api-search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: []
    }
  }
  componentWillMount() {
    YTSearch({key: this.props.apikey, term: 'reactjs'}, data => this.setState({videoList: data}));
  }
  onSearchTerm(term) {
    YTSearch({key: this.props.apikey, term: term}, data => this.setState({videoList: data}));
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <SearchBar handleSearch={this.onSearchTerm.bind(this)}/>
          <div className="row">
            <VideoDetail video={this.state.videoList[0]} />
            <VideoList videoList={this.state.videoList} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  apikey: React.PropTypes.string.isRequired
}

export default App;
