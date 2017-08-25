import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class RecipeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button className='modalName' onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.props.Recipe}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Expand</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Return</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
