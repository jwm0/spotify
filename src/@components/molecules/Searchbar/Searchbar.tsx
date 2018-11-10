import * as React from 'react';
import { connect } from 'react-redux';

import { requestSearch, requestSearchByType } from '@store/Search/actions';
import { Type } from 'types/youtube';

import { Wrapper, StyledInput } from './styles';

class Searchbar extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      query: props.query,
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSearch = () => {
    this.props.search(this.state.query);
  }

  render() {
    const { query } = this.state;

    return (
      <Wrapper>
        <span>Search Icon</span>
        <StyledInput
          name="query"
          value={query}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch}>SEARCH</button>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  query: state.search.query,
});

const mapDispatchToProps = dispatch => ({
  search: (query: string) => dispatch(requestSearch(query)),
  searchByType: (query: string, results?: number, type?: Type) => dispatch(requestSearchByType(query, results, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
