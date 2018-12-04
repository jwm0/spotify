import * as React from 'react';
import { connect } from 'react-redux';
import { requestPlaylistById } from '@store/Playlist/actions';

import ImageTile from '@components/atoms/ImageTile';
import SongsList from '@components/organisms/SongsList';

import {
  PlaylistInfo, PrimaryText, SecondaryText,
  Controls, Info, PlayButton, InfoWrapper, Description,
} from './styles';

// TODO: mock data, remove
const ids = [];

class Playlist extends React.Component<any> {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPlaylistById(id);
  }

  render() {
    const { playlist } = this.props;
    return (
      <>
        <div>
          <PlaylistInfo>
            <ImageTile background={playlist.image} />
            <InfoWrapper>
              <Info>
                <PrimaryText>{playlist.name}</PrimaryText>
                <Description>
                  {playlist.description}
                </Description>
                <SecondaryText>By {playlist.authorName}</SecondaryText>
                <SecondaryText>{playlist.items.length}</SecondaryText>
              </Info>
              <Controls>
                <PlayButton>
                  PLAY
                </PlayButton>
              </Controls>
            </InfoWrapper>
          </PlaylistInfo>
        </div>
        <SongsList songIds={ids} />
      </>
    )
  }
}

const mapStateToProps = state => ({
  playlist: state.playlist,
});

const mapDispatchToProps = dispatch => ({
  getPlaylistById: (id) => dispatch(requestPlaylistById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
