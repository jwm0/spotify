import * as React from 'react';

import TileGrid from '@components/organisms/TileGrid';

// INFO: mock data
const playlists = [
  {
    name: 'Playlist #1',
  },
  {
    name: 'Playlist #2',
  },
  {
    name: 'Playlist #3',
  },
]

class Main extends React.Component {
  render() {
    return (
      <div>
        <TileGrid tiles={playlists} />
      </div>
    )
  }
}

export default Main;
