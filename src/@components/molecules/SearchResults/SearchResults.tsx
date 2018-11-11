import * as React from 'react';

import { Header, Title, Grid, MoreButton } from './styles';
import { Props } from './types';

class SearchResults extends React.PureComponent<Props> {
  render() {
    const { title, children, hasMoreResults } = this.props;

    return (
      <div>
        <Header>
          <Title>{title}</Title>
          {hasMoreResults &&
            <MoreButton to="/search/songs">
              see all
            </MoreButton>
          }
        </Header>
        <Grid>
          {children}
        </Grid>
      </div>
    )
  }
}

export default SearchResults;
