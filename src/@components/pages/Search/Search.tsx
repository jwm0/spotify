import * as React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import Searchbar from '@components/molecules/Searchbar';
import SearchResults from '@components/molecules/SearchResults';
import InfoTile from '@components/molecules/InfoTile';
import { requestSearchByType } from '@store/Search/actions';
import { Type } from 'types/youtube';

import { Props } from './types';

class Search extends React.Component<Props> {
  render() {
    const { query, songs, artists, playlists } = this.props;
    const noResults = !songs.length && !artists.length && !playlists.length;

    return (
      <div>
        <Searchbar />
        {noResults ?
          <span>No results found for {query}</span> :
          (
            <>
              <SearchResults title="Songs" hasMoreResults>
                {songs.map(song => (
                  <InfoTile
                    key={song.id}
                    id={song.id}
                    thumbnail={song.thumbnail.url}
                    primary={song.title}
                    secondary={song.artistName}
                    type="song"
                  />
                ))}
              </SearchResults>
              <SearchResults title="Artists">
                {artists.map(artist => (
                  <InfoTile
                    key={artist.id}
                    id={artist.id}
                    thumbnail={artist.thumbnail.url}
                    primary={artist.name}
                    type="artist"
                    isRound
                  />
                ))}
              </SearchResults>
              <SearchResults title="Playlists">
                {playlists.map(playlist => (
                  <InfoTile
                    key={playlist.id}
                    id={playlist.id}
                    thumbnail={playlist.thumbnail.url}
                    primary={playlist.title}
                    secondary={`by ${playlist.creatorName}`}
                    type="playlist"
                  />
                ))}
              </SearchResults>
            </>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  artists: get(state.search.data, 'artists', []),
  playlists: get(state.search.data, 'playlists', []),
  query: state.search.query,
  songs: get(state.search.data, 'songs', []),
});

const mapDispatchToProps = (dispatch, state) => ({
  getMoreResults: (type: Type) => dispatch(requestSearchByType(state.search.query, 15, type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
