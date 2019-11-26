import React, { Component } from 'react';
import axios from 'axios';
import './SearchResults.css';
import { Link } from 'react-router-dom';

export default class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      //list of filtered products
      products: [],
      //filteredCategories
      filteredCategories: [],
      //filteredBrands
      filteredBrands: []
    };
  }

  componentDidMount = () => {
    // console.log(this.props);
    //axios request to get all products and store them on state
    axios
      .get('/api/products')
      .then(res => {
        console.log(res.data);
        this.setState({
          products: res.data
        });
      })
      .catch(err => console.log(err));
  };

  //Filters an array of all the categories to only include those with checked boxes
  filterCategories = () => {
    for (let key in this.props.categories) {
      // console.log(this.props.categories[key]);
      if (this.props.categories[key]) {
        if (!this.state.filteredCategories.includes(key)) {
          this.state.filteredCategories.push(key);
        }
      } else if (this.state.filteredCategories.includes(key)) {
        let index = this.state.filteredCategories.indexOf(key);
        this.state.filteredCategories.splice(index, 1);
      }
    }
  };

  //Filters an array of all the brands to only include those with checked boxes
  filterBrands = () => {
    for (let key in this.props.brands) {
      // console.log(this.props.brands[key]);
      if (this.props.brands[key]) {
        if (!this.state.filteredBrands.includes(key)) {
          this.state.filteredBrands.push(key);
        }
      } else {
        if (this.state.filteredBrands.includes(key)) {
          let index = this.state.filteredBrands.indexOf(key);
          this.state.filteredBrands.splice(index, 1);
        }
      }
    }
  };

  //function to sort list of all products to return products in selected categories/brands
  sortItems = products => {
    let tempArray = [];
    //if all brands/all categories are false return all items
    for (let i = 0; i < products.length; i++) {
      if (
        this.state.filteredCategories.includes(products[i].category) ||
        this.state.filteredCategories.length === 0
      ) {
        if (
          this.state.filteredBrands.includes(products[i].brand) ||
          this.state.filteredBrands.length === 0
        ) {
          tempArray.push(products[i]);
        }
      }
    }
    return tempArray;
  };

  componentDidUpdate = prevProps => {
    // console.log(this.props);
    this.filterBrands();
    this.filterCategories();
    // console.log(this.state.filteredCategories);
    if (prevProps !== this.props) {
      if (this.props.urlInput === '') {
        axios
          .get('/api/products')
          .then(res => {
            console.log(res.data);
            this.setState({ products: this.sortItems(res.data) });
            console.log(this.state.products);
          })
          .catch(err => console.log(err));
      } else {
        this.setState({
          products: this.sortItems(
            this.state.products.filter((e, i) => {
              // return e.url === this.props.urlInput
              return e.url.includes(this.props.urlInput);
            })
          )
        });
      }
    }
  };

  render() {
    console.log(this.state.products);
    return (
      <>
        {this.state.products.map((e, i) => {
          return (
            <Link to={`/product/${e.product_id}`}>
              <div
                className='search-result'
                style={{ backgroundImage: `url(${e.img_url})` }}
              ></div>
            </Link>
          );
        })}
      </>
    );
  }
}
