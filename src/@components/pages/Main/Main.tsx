import * as React from 'react';

import { database } from '@services/firebase';
import TileGrid from '@components/organisms/TileGrid';

class Main extends React.Component {
  private _isMounted: boolean;

  state = {
    playlists: [],
  }

  async componentDidMount() {
    this._isMounted = true;
    const snapshot = await database.ref(`public/playlists`).once('value');
    const playlists = snapshot.val() || {};
    const items = Object.keys(playlists).map(key => playlists[key]);

    if (this._isMounted) {
      this.setState({
        playlists: items,
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <TileGrid
          tiles={this.state.playlists}
          type="playlist"
        />
      </div>
    )
  }
}

export default Main;
