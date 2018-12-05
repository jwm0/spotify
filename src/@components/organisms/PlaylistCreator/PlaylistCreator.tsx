import * as React from 'react';
import { connect } from 'react-redux';

import { requestPlaylistCreate } from '@store/User/actions';

import { Wrapper, Input, Textarea, FormWrapper, Label, SubmitButton, FullWidth } from './styles';
import { Props } from './types';

class PlaylistCreator extends React.PureComponent<Props> {
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

  handleSubmit = () => {
    const { name, image, description } = this.state;

    this.props.createPlaylist({ name, image, description });
  }

  render() {
    const { name, description } = this.state;

    return (
      <Wrapper>
        <FullWidth>
          <Label>Name</Label>
          <Input
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </FullWidth>
        <FormWrapper>
          <FullWidth>
            <Label>Description</Label>
            <Textarea
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </FullWidth>
        </FormWrapper>
        <SubmitButton onClick={this.handleSubmit}>
          CREATE
        </SubmitButton>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPlaylist: (data: { name, description, image }) => dispatch(requestPlaylistCreate(data))
});

export default connect(null, mapDispatchToProps)(PlaylistCreator);