import React, { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

class Player extends Component {
  state = {
    isVideoLoading: false,
  };
  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoading: false });
    }
  }

  render() {
    const { isVideoLoading } = this.state;
    const { url } = this.props;
    const showLoading = url && !isVideoLoading;
    const playerSize = isVideoLoading ? '100%' : 0;
    return (
      <>
        {showLoading && <h2>Loading...</h2>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              width={playerSize}
              height={playerSize}
              onReady={() => this.setState({ isVideoLoading: true })}
              controls
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}
export default Player;
