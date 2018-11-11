import * as React from 'react';
import { connect } from 'react-redux';

import { Header, Title, Grid, MoreButton } from './styles';
import { Props } from './types';

class SearchResults extends React.PureComponent<Props> {
  render() {
    const { query, title, children, hasMoreResults } = this.props;

    return (
      <div>
        <Header>
          <Title>{title}</Title>
          {hasMoreResults &&
            <MoreButton to={`/search/songs/${query}`}>
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

const mapStateToProps = state => ({
  query: state.search.query,
});

export default connect(mapStateToProps)(SearchResults);
