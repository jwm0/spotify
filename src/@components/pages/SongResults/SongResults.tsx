import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { requestSearchByType } from '@store/Search/actions';
import SongsList from '@components/organisms/SongsList';

import { Props } from './types';

class SongResults extends React.PureComponent<Props> {
  componentDidMount() {
    const { query } = this.props.match.params;

    this.props.searchSongs(query);
  }

  render() {
    return (
      <div>
        <Link to="/search">GO BACK</Link>
        <SongsList songIds={this.props.ids} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ids: state.search.data.ids,
  query: state.search.query,
});

const mapDispatchToProps = dispatch => ({
  searchSongs: (query: string) => dispatch(requestSearchByType(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongResults);
