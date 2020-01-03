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

export class AddCategoryModal extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      parentCategory:[],
      parentId: null
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount(){
    fetch('http://localhost:5000/categories')
    .then(res => res.json())
    .then(res => this.setState({parentCategory:res}));
  }

  selectParent = e => {
    var value =this.state.parentCategory.filter(category => e.target.value === category.category_name)
    this.setState({parentId:value[0].cid})
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
            <h5 className="mr-4 text-light">Add Category Modal</h5>
            <button className="btn btn-danger" onClick={() => this.props.closeModal()}>close</button>
          </div>
          <div>
            <label>Select Parent Category </label>
            <select  onChange = {this.selectParent}>
              <option  value="select">Select</option>
              {this.state.parentCategory.map(category =>
                <option key={category.cid} value={category.category_name} >{category.category_name}</option>
              )}
            </select>
          </div>
          <form className="p-3" onSubmit={(e) => this.props.submitForm(this.state, e)}>
            <input type="text" className="form-control" name="name" placeholder="Enter cateogory name" onChange={this.handleChange} />
            <button className="btn btn-primary mt-3 ml-auto">save</button>
          </form>
        </Modal>
      </div>
    );
  }
}
export default AddCategoryModal;
