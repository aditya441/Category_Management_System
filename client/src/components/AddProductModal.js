import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0
  }
};

Modal.setAppElement("#root");

export class AddProductModal extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={true}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <div className="d-flex bg-secondary p-3">
            <h5 className="mr-4 text-light">Add Product Modal</h5>
            <button className="btn btn-danger" onClick={() => this.props.closeModal()}>close</button>
          </div>
          <form className="p-3" onSubmit={(e) => this.props.submitForm(this.state, e)}>
            <input type="text" className="form-control" name="name" placeholder="Enter product name" onChange={this.handleChange} />
            <button className="btn btn-primary mt-3 ml-auto">save</button>
          </form>
        </Modal>
      </div>
    );
  }
}



export default  AddProductModal;
