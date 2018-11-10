import * as React from 'react';

import { Header, Title, Grid } from './styles';
import { Props } from './types';

class SearchResults extends React.PureComponent<Props> {
  render() {
    const { title, children } = this.props;

    return (
      <div>
        <Header>
          <Title>{title}</Title>
          <span>see all</span>
        </Header>
        <Grid>
          {children}
        </Grid>
      </div>
    )
  }
}

export default SearchResults;
