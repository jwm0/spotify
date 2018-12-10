import * as React from 'react';
import { connect } from 'react-redux';

import TileGrid from '@components/organisms/TileGrid';

class Library extends React.Component<any> {
  render() {
    const { playlists } = this.props;

    return (
      <div>
        <TileGrid
          tiles={playlists}
          type="playlist"
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.user.playlists,
});

export default connect(mapStateToProps)(Library);
