import * as React from 'react';
import { get } from 'lodash';

import TileGrid from '@components/organisms/TileGrid';
import SongListItem from '@components/molecules/SongListItem';
import { database } from '@services/firebase';
import { Songs } from '@services/youtube';
import { getArtist } from '@utils/youtube';

import { Header, Title } from './styles';
import { State } from './types';

class Main extends React.Component<{}, State> {
  private _isMounted: boolean;

  state = {
    playlists: [],
    songs: [],
  }

  async componentDidMount() {
    this._isMounted = true;
    const snapshot = await database.ref(`public/playlists`).limitToLast(10).once('value');
    const playlists = snapshot.val() || {};
    const items = Object.keys(playlists).map(key => playlists[key]);

    const songData = await Songs.listMostPopular();
    const songs = songData.data.items.map((song) => {
      const { artistName, title } = getArtist(song.snippet.title);

      return {
        artistName,
        duration: song.contentDetails.duration,
        id: song.id,
        playCount: song.statistics.viewCount,
        quality: song.contentDetails.definition,
        thumbnail: get(song.snippet, 'thumbnails.default.url', ''),
        title,
      };
    });

    if (this._isMounted) {
      this.setState({
        playlists: items,
        songs,
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { songs, playlists } = this.state;

    return (
      <div>
        <Header>
          Discover Music
        </Header>
        <Title>Featured Playlists</Title>
        <TileGrid
          tiles={playlists}
          type="playlist"
        />
        <Title>Hot Top 5</Title>
        {songs.map((song: any) => (
            <SongListItem
              key={song.id}
              artistName={song.artistName}
              duration={song.duration}
              id={song.id}
              playCount={song.playCount}
              quality={song.quality}
              title={song.title}
            />
        ))}
      </div>
    )
  }
}

export default Main;
