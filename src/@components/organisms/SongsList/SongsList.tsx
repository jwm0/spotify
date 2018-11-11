import * as React from 'react';

import SongListItem from '@components/molecules/SongListItem';

import { Wrapper, List } from './styles';

class SongsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    // fetch details
  }

  render() {
    return (
      <Wrapper>
        <List>
          <SongListItem />
        </List>
      </Wrapper>
    )
  }
}

export default SongsList;
