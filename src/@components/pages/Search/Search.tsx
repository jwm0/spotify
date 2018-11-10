import * as React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import Searchbar from '@components/molecules/Searchbar';
import SearchResults from '@components/molecules/SearchResults';
import InfoTile from '@components/molecules/InfoTile';

import { Props } from './types';

class Search extends React.Component<Props> {
  render() {
    const { songs } = this.props;

    return (
      <div>
        <Searchbar />
        <SearchResults title="Songs">
          {songs.map((song, i) => (
            <InfoTile
              key={i}
              thumbnail={song.thumbnail.url}
              primary={song.title}
              secondary={song.artistName}
            />
          ))}
        </SearchResults>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  artists: get(state.search.data, 'artist', []),
  playlists: get(state.search.data, 'playlist', []),
  songs: get(state.search.data, 'songs', []),
});

export default connect(mapStateToProps)(Search);
