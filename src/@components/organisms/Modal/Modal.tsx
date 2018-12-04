import * as React from 'react';
import { createPortal } from 'react-dom';

import {
  ModalBackdrop, ModalDialog, ModalBody,
  ModalClose, ModalHeader,
} from './styles';
import { Props, State } from './types';

class Modal extends React.PureComponent<Props, State> {
  private backdrop: React.RefObject<any>;
  private content: React.RefObject<any>;

  static defaultProps = {
    isActive: true,
    isOpen: false,
    size: 'full',
  };

  constructor(props) {
    super(props);

    this.backdrop = React.createRef();
    this.content = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown', this._onEscapePress);
  }

  componentWillUnmount() {
    document.body.style.position = 'initial';
    document.body.style.overflow = 'initial';
    document.removeEventListener('keydown', this._onEscapePress);
  }

  _onEscapePress = (event) => {
    if (event.keyCode === 27) {
      this.props.onClose();
    }
  }

  _handleClickOutside = (e) => {
    // TODO: fix this
    if (e.target === this.backdrop) {
      this.props.onClose();
    }
  }

  render() {
    const {
      children, isOpen, onClose,
    } = this.props;

    return isOpen ?
            createPortal(
              <ModalBackdrop
                ref={this.backdrop}
                onClick={this._handleClickOutside}
              >
                <ModalDialog
                  ref={this.content}
                >
                  <ModalHeader>
                    {onClose &&
                      <ModalClose onClick={onClose}>
                        X
                      </ModalClose>
                    }
                  </ModalHeader>
                  <ModalBody>
                    {children}
                  </ModalBody>
                </ModalDialog>
              </ModalBackdrop>,
              document.body,
            ) :
            null;
  }
}

export default Modal;
