import * as React from 'react';
import { Link } from 'react-router-dom';

import SongsList from '@components/organisms/SongsList';

class SongResults extends React.PureComponent {
  render() {
    return (
      <div>
        <Link to="/search">GO BACK</Link>
        <SongsList />
      </div>
    )
  }
}

export default SongResults;
