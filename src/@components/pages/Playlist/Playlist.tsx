import * as React from 'react';

import ImageTile from '@components/atoms/ImageTile';
import SongsList from '@components/organisms/SongsList';

import {
  PlaylistInfo, PrimaryText, SecondaryText,
  Controls, Info, PlayButton,
} from './styles';

// TODO: mock data, remove
const ids = [];

class Playlist extends React.Component<any> {
  render() {
    const { image } = this.props;
    return (
      <>
        <div>
          <PlaylistInfo>
            <ImageTile background="" />
            <Info>
              <PrimaryText>{image}</PrimaryText>
              <SecondaryText>By maffinz</SecondaryText>
              <SecondaryText>62 songs</SecondaryText>
              <Controls>
                <PlayButton>
                  PLAY
                </PlayButton>
              </Controls>
            </Info>
          </PlaylistInfo>
        </div>
        <SongsList songIds={ids} />
      </>
    )
  }
}

// const mapStateToProps = state => ({
//   playlist: state.playlist,
// });

export default Playlist;
