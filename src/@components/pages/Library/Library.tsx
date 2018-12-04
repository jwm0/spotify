import * as React from 'react';
import { connect } from 'react-redux';

import TileGrid from '@components/organisms/TileGrid';
import { requestPlaylistCreate } from '@store/User/actions';

class Library extends React.Component<any> {
  handleNewPlaylist = () => {
    const playlist = {
      description: 'test description',
      image: 'url',
      name: 'test playlist',
    };

    this.props.createPlaylist(playlist);
  }

  render() {
    const { playlists } = this.props;

    return (
      <div>
        <TileGrid
          tiles={playlists}
          type="playlist"
        />
        <button onClick={this.handleNewPlaylist}>create test playlist</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.user.playlists,
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: (data: { name, description, image }) => dispatch(requestPlaylistCreate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);
