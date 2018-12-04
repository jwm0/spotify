import * as React from 'react';
import { connect } from 'react-redux';

import { Wrapper, Input, Textarea } from './styles';

class PlaylistCreator extends React.PureComponent {
  state = {
    description: '',
    image: '',
    name: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, description } = this.state;

    return (
      <Wrapper>
        <Input
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <Textarea
          name="description"
          value={description}
          onChange={this.handleChange}
        />
      </Wrapper>
    )
  }
}

export default connect()(PlaylistCreator);
