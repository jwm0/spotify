import * as React from 'react';
import { connect } from 'react-redux';

import SongListItem from '@components/molecules/SongListItem';
import { requestSongDetails } from '@store/Playlist/actions';

import { Wrapper, List } from './styles';
import { Props } from './types';

class SongsList extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { isLoading } = state;
    const { songIds, getSongDetails} = props;

    if (isLoading && songIds && songIds.length > 0) {
      getSongDetails(songIds);

      return { isLoading: false }
    }

    return null;
  }

  render() {
    const { playlist } = this.props;

    return (
      <Wrapper>
        <List>
          {playlist.map(song => (
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
        </List>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  playlist: state.playlist.details,
});

const mapDispatchToProps = dispatch => ({
  getSongDetails: (ids: string | string[]) => dispatch(requestSongDetails(ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
