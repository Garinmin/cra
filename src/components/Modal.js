import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

export default class ShowModal extends Component {

  render() {
    return (

        <Modal show={this.props.show} onHide={this.props.onClose}>
            <Modal.Dialog>

                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                 <img src={this.props.imgUrl} style={{width: "100%"}} alt=""/>
                 <p>{this.props.description}</p>
                </Modal.Body>

            </Modal.Dialog>
        </Modal>
  )};
}