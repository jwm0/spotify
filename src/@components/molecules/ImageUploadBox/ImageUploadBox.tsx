import * as React from 'react';

import Icon from '@components/atoms/Icon';

import { Props, State } from './types';
import {
  Box, UploadWrapper, FileButton,
  FileInput, ImageWrapper, Image,
  ButtonCross, ErrorMessage, ButtonReplace,
  CenterText,
} from './styles';

const formats = ['.png', '.jpg', '.jpeg'];

class ImageUploadBox extends React.Component<Props, State>{
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      imageURL: '',
      loading: false,
    };
  }

  handleUpload = (e) => {
    const image = e.target.files[0];

    // INFO: this will allow user to select same file when request fails

    const reader  = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (q: any) => {
      this.setState({
        imageURL: q.target.result,
      });
    }

    this.props.onChange(this.props.name, image);
  }

  handleRemove = () => {
    // INFO: call setState first for better UX
    this.setState(
      {
        error: false,
        imageURL: '',
        loading: false,
      }, () => {
        this.props.onChange(this.props.name, null);
      },
    );
  }

  render() {
    const { allowDelete } = this.props;
    const { error, imageURL, loading } = this.state;

    return (
      <Box>
        {
          imageURL ?
          (
            <ImageWrapper>
              <Image
                src={imageURL}
                loading={loading}
              />
              {allowDelete ?
                (
                  <ButtonCross onClick={this.handleRemove}>
                    <Icon
                      image={''}
                      size={20}
                    />
                  </ButtonCross>
                ) :
                (
                  <>
                    <FileInput
                      type="file"
                      name={this.props.name}
                      id={this.props.name}
                      accept={formats.join(',')}
                      onChange={this.handleUpload}
                      disabled={loading}
                    />
                    <ButtonReplace
                      htmlFor={this.props.name}
                      disabled={loading}
                    >
                      Replace
                    </ButtonReplace>
                    <CenterText>
                      {loading && <span>uploading...</span>}
                      {error && <ErrorMessage>Image upload failed, please try again</ErrorMessage>}
                    </CenterText>
                  </>
                )
              }
            </ImageWrapper>
          ) :
          (
            <UploadWrapper>
              <FileInput
                type="file"
                name={this.props.name}
                id="file"
                accept={formats.join(',')}
                onChange={this.handleUpload}
                disabled={loading}
              />
              <FileButton
                htmlFor="file"
                disabled={loading}
              >
                <span>+</span>Add Photo
              </FileButton>
              {loading && <span>uploading...</span>}
              {error && <ErrorMessage>Image upload failed, please try again</ErrorMessage>}
              <span>Supported file types: {formats.join(', ')}</span>
            </UploadWrapper>
          )
        }
      </Box>
    );
  }
}

export default ImageUploadBox;
