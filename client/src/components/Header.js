import React, { Component } from "react";
import AddProductModal from "./AddProductModal";
import AddCategoryModal from "./AddCategoryModal";
import AddBrandModal from './AddBrandModal'
import { Router, Route, Link } from "react-router-dom";

export class Header extends Component {

  closeModal = () => {
    window.location.href = '/'
  }

  productSubmitForm = (data, e) => {
    e.preventDefault();
    console.log(data);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
          "Content-type": "application/json"
          },
          body: JSON.stringify(data)
      })
      .then(res => res.text())
      .then(res => alert(res));

  }

  categorySubmitForm = (data, e) => {
    e.preventDefault();
    console.log(data);
    fetch("http://localhost:5000/categories", {
      method: "POST",
      headers: {
          "Content-type": "application/json"
          },
          body: JSON.stringify(data)
      })
      .then(res => res.text())
      .then(res => alert(res));

  }

  brandSubmitForm = (data, e) => {
    e.preventDefault();
    console.log(data);
    fetch("http://localhost:5000/brands", {
      method: "POST",
      headers: {
          "Content-type": "application/json"
          },
          body: JSON.stringify(data)
      })
      .then(res => res.text())
      .then(res => alert(res));

  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              
              <Link to="/addProduct"><button className="btn btn-primary">
                Add Product
              </button></Link>
            </li>
            <li className="nav-item active">
              <Link to="/addBrand">
              <button className="btn btn-secondary">Add Brand</button>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to ="/addCategory">
              <button className="btn btn-success">Add Category</button>
              </Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/addProduct">
          <AddProductModal closeModal={this.closeModal} submitForm={this.productSubmitForm} />
        </Route>
        <Route exact path="/addCategory">
          <AddCategoryModal closeModal={this.closeModal} submitForm={this.categorySubmitForm} />
        </Route>
        <Route exact path="/addBrand">
          <AddBrandModal closeModal = {this.closeModal} submitForm={this.brandSubmitForm} />
        </Route>
      </React.Fragment>
    );
  }
}

export default Header;
