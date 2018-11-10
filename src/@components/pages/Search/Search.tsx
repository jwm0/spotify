import * as React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import Searchbar from '@components/molecules/Searchbar';
import SearchResults from '@components/molecules/SearchResults';
import InfoTile from '@components/molecules/InfoTile';

import { Props } from './types';

class Search extends React.Component<Props> {
  render() {
    const { songs, artists, playlists } = this.props;

    return (
      <div>
        <Searchbar />
        <SearchResults title="Songs">
          {songs.map(song => (
            <InfoTile
              key={song.id}
              thumbnail={song.thumbnail.url}
              primary={song.title}
              secondary={song.artistName}
            />
          ))}
        </SearchResults>
        <SearchResults title="Artists">
          {artists.map(artist => (
            <InfoTile
              key={artist.id}
              thumbnail={artist.thumbnail.url}
              primary={artist.name}
              isRound
            />
          ))}
        </SearchResults>
        <SearchResults title="Playlists">
          {playlists.map(playlist => (
            <InfoTile
              key={playlist.id}
              thumbnail={playlist.thumbnail.url}
              primary={playlist.title}
              secondary={`by ${playlist.creatorName}`}
            />
          ))}
        </SearchResults>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  artists: get(state.search.data, 'artists', []),
  playlists: get(state.search.data, 'playlists', []),
  songs: get(state.search.data, 'songs', []),
});

export default connect(mapStateToProps)(Search);
