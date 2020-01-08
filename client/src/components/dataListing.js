import React from "react";
import { connect } from "react-redux";
import { getProducts,getCategories,getBrand } from '../actions/products'


class dataListing extends React.Component {
    state = {
      parentCategory:[],
      filterBy:'',
      filterValue:'',
    };
  
    handleChange = event => {
      this.setState({ filter: event.target.value });
    };

    componentDidMount(){
      Promise.all([
      fetch('http://localhost:5000/categories'),
      fetch('http://localhost:5000/brands'),
      fetch('http://localhost:5000/products')
      ])
      .then(([res1,res2,res3]) => Promise.all([res1.json(),res2.json(),res3.json()]))
      .then(([data1,data2,data3]) => {
        this.props.getCategories(data1)
        this.props.getBrand(data2)
        this.props.getProducts(data3)
      });
    }

    selectParent = e => {
      this.setState({filterBy:e.target.value})
    }

    filter = e => {
      this.setState({filterValue:e.target.value})
    }

    render() {
      const filteredData = this.props.products.filter(item => {
        if(this.state.filterBy === 'brand')
        return item.brand.indexOf(this.state.filterValue) !== -1;
        else
        return item.category.indexOf(this.state.filterValue) !== -1
      })
      return (
        <div>
          <div>
            <label className="mr-5 ml-3">Filter</label>
            <select onChange = {this.selectParent}>
            <option  value="select">Select</option>
              <option  value="brand">brands</option>
              <option  value="category">categories</option>   
            </select>
            <select onChange = {this.filter}>
              <option  value="select">Select</option>
            { this.state.filterBy === 'brand' ? (
              this.props.brands.map(brand => 
                <option key={brand.bid} value={brand.brandName} >{brand.brandName}</option>
                )
            ):(
              this.props.categories.map(category => 
              <option key={category.cid} value={category.category_name}>{category.category_name}</option>
                )
            )            
            }
            </select>
          </div>
        <table className="table  table-striped table-dark mt-1">
          <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Brand</th>
            <th scope="col">Category</th>
            <th scope="col">Parent Category</th>
            <th scope="col">BreadCrumb</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(product => {
              return (
              <tr>
                 <th scope="row">{product.product_name}</th>
                 <td>{product.brand}</td>
                 <td>{product.category}</td>
                 {this.props.categories.map(category => {
                     if(category.category_name === product.category && category.parentId === null){
                      return (
                        <td>-----</td>
                      )
                     }
                      else if(category.parentId !== null && category.category_name === product.category) {
                      var parent =this.props.categories.filter(parent => category.parentId === parent.cid  )
                      if(parent.length > 0)
                       return <td>{parent[0].category_name}</td>
                      }
                    
                  })}
                    <td>
                    <ol className="breadcrumb">
                      {this.props.categories.map(category => {
                        if(category.category_name === product.category && category.parentId === null){
                          return (
                          <li className="breadcrumb-item active" aria-current="page">{category.category_name}</li>
                          )
                        }
                        else if(category.parentId !== null && category.category_name === product.category){
                          var parent =this.props.categories.filter(parent => category.parentId === parent.cid)
                          return (
                            <div>
                            <li className="breadcrumb-item active" aria-current="page">{parent[0].category_name}</li>
                            <li className="breadcrumb-item active" aria-current="page">{product.category}</li>
                            </div>
                          )
                        }
                      })}

                    </ol>
                    </td>
              </tr>
            )})}
          </tbody>
        </table>
        </div>
      );
    }
  }


  const mapStateToProps = (state) => {
    return {
      categories: state.products.categories,
      brands:state.products.brands,
      products:state.products.products
    }
  }
  
  const mapActionCreator = {
    getCategories,
    getBrand,
    getProducts
  }
  
  export default connect(mapStateToProps, mapActionCreator)(dataListing);

  