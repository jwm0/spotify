import * as React from 'react';

import TileGrid from '@components/organisms/TileGrid';

// INFO: mock data
const playlists = [
  {
    background: 'https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/DjpMd11UUAI3OYf_m0ejse/mac-miller-new-album-swimming-stream-self-care.jpg',
    name: 'Playlist #1',
  },
  {
    background: 'https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/DjpMd11UUAI3OYf_m0ejse/mac-miller-new-album-swimming-stream-self-care.jpg',
    name: 'Playlist #2',
  },
  {
    background: 'https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/DjpMd11UUAI3OYf_m0ejse/mac-miller-new-album-swimming-stream-self-care.jpg',
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
