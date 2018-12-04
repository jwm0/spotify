import * as React from 'react';

import TileGrid from '@components/organisms/TileGrid';

// INFO: mock data
const playlists = [
  {
    background: 'https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/DjpMd11UUAI3OYf_m0ejse/mac-miller-new-album-swimming-stream-self-care.jpg',
    id: '123',
    name: 'Playlist #1',
  },
  {
    background: 'https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/DjpMd11UUAI3OYf_m0ejse/mac-miller-new-album-swimming-stream-self-care.jpg',
    id: 'a1',
    name: 'Playlist #2',
  },
  {
    background: 'https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/DjpMd11UUAI3OYf_m0ejse/mac-miller-new-album-swimming-stream-self-care.jpg',
    id: '123a',
    name: 'Playlist #3',
  },
];

class Main extends React.Component {
  render() {
    return (
      <div>
        <TileGrid
          tiles={playlists}
          isPlaylist
        />
      </div>
    )
  }
}

export default Main;
