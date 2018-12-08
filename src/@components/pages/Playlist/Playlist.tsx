import * as React from 'react';
import { connect } from 'react-redux';

import { requestPlaylistById } from '@store/Playlist/actions';
import { requestPublishPlaylist, requestUnpublishPlaylist } from '@store/User/actions';
import ImageTile from '@components/atoms/ImageTile';
import SongsList from '@components/organisms/SongsList';

import {
  PlaylistInfo, PrimaryText, SecondaryText,
  Controls, Info, PlayButton, InfoWrapper, Description,
  PublicLabel, PublishButton,
} from './styles';

class Playlist extends React.Component<any> {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPlaylistById(id);
  }

  handlePublish = () => {
    const { uid, match: { params: { id} } } = this.props;

    this.props.publishPlaylist(id, uid);
  }

  handleUnpublish = () => {
    const { uid, match: { params: { id} } } = this.props;

    this.props.unpublishPlaylist(id, uid);
  }

  render() {
    const { playlist, uid } = this.props;
    return (
      <>
        <div>
          <PlaylistInfo>
            <ImageTile background={playlist.image} />
            <InfoWrapper>
              <Info>
                <PrimaryText>
                  {playlist.name}
                  <PublicLabel>{playlist.public ? 'public' : 'private'}</PublicLabel>
                </PrimaryText>
                <Description>
                  {playlist.description}
                  Most popular rap songs
                </Description>
                <SecondaryText>By {playlist.authorName}</SecondaryText>
                <SecondaryText>{playlist.items.length} songs</SecondaryText>
              </Info>
              <Controls>
                <PlayButton>
                  PLAY
                </PlayButton>
                {uid === playlist.authorId && playlist.public ?
                  (
                    <PublishButton onClick={this.handleUnpublish}>
                      Make Private
                    </PublishButton>
                  ) :
                  (
                    <PublishButton onClick={this.handlePublish}>
                      Make Public
                    </PublishButton>
                  )
                }
              </Controls>
            </InfoWrapper>
          </PlaylistInfo>
        </div>
        <SongsList />
      </>
    )
  }
}

const mapStateToProps = state => ({
  playlist: state.playlist,
  uid: state.user.uid,
});

const mapDispatchToProps = dispatch => ({
  getPlaylistById: (id) => dispatch(requestPlaylistById(id)),
  publishPlaylist: (playlistId, uid) => dispatch(requestPublishPlaylist(playlistId, uid)),
  unpublishPlaylist: (playlistId, uid) => dispatch(requestUnpublishPlaylist(playlistId, uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
