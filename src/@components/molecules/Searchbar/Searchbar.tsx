import * as React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import Icon from '@components/atoms/Icon';
import search from '@assets/Icons/search.svg';
import { requestSearch, requestSearchByType } from '@store/Search/actions';
import { Type } from 'types/youtube';

import { Wrapper, StyledInput } from './styles';

class Searchbar extends React.PureComponent<any, any> {
  debouncedSearch: (query: string) => void;

  constructor(props) {
    super(props);

    this.debouncedSearch = debounce(props.search, 400);
    this.state = {
      query: props.query,
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    this.debouncedSearch(value);
  }

  render() {
    const { query } = this.state;

    return (
      <Wrapper>
        <Icon image={search} />
        <StyledInput
          name="query"
          placeholder="Type here to search..."
          value={query}
          onChange={this.handleChange}
          autoFocus
        />
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
