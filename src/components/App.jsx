import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle.styled';
import video from '../video.json';
import Player from './Player/Player';
import { VideoList } from './VideoList/VideoList';
import Reader from './Reader/Reader';
import publications from '../publication.json';

class App extends Component {
  state = {
    selectedVideo: null,
  };
  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };
  render() {
    return (
      <div>
        {/* <h1>Selected video:{this.state.selectedVideo}</h1>
        React homework template */}
        <GlobalStyle />
        {/* <VideoList videos={video} onSelect={this.selectVideo}/>
        <Player url={this.state.selectedVideo} /> */}
        <Reader items={publications} />
      </div>
    );
  }
}
export default App;
