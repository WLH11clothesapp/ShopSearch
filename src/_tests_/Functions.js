//This file is for the functions in landing.js to use in the testing file
import axios from 'axios';

module.exports = {
  getProducts: async () => {
    let data;
    await axios
      .get('http://localhost:5050/api/products')
      .then(res => (data = res.data))
      .catch(err => console.log(err));
    return data;
  },
  validate: values => {
    /// state will be put in for values
    const errors = {};

    if (!values.name || false) {
      ///test for name is there and if its longer than 3
      errors.name = 'Must enter a name'; /// || login is to make sure it doesn't go off in the login form
    } else if (values.name.length < 3 || false) {
      errors.name = 'Username needs to be more than 3 characters';
    }

    if (!values.email) {
      /// checks for email and if it's in the right format
      errors.email = 'Must enter an email';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid Email address';
    }

    if (!values.password) {
      /// checks for password and if its longer than 2
      errors.password = 'Password is required';
    } else if (values.password.length < 3) {
      errors.password = 'Password needs to be more than 2 characters';
    }

    if (!values.igHandle || false) {
      // checks for igHandle and if it starts with @
      errors.igHandle = 'Must enter an Instagram handle';
    } else if (!/@\S+/.test(values.igHandle) || false) {
      errors.igHandle = 'follow format @yourHandle';
    }
    return errors;
  },
  randomize: products => {
    let indexes = [];
    if (indexes.length === 0) {
      for (let i = 0; i < products.length; i++) {
        indexes.push(i);
      }
    }
    let currentIndex = indexes.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = indexes[currentIndex];
      indexes[currentIndex] = indexes[randomIndex];
      indexes[randomIndex] = temporaryValue;
    }
    return indexes;
  },
  filterCategories: categories => {
    let output = [];
    for (let key in categories) {
      // console.log(this.props.categories[key]);
      if (categories[key]) {
        if (!output.includes(key)) {
          output.push(key);
        }
      } else if (output.includes(key)) {
        let index = output.indexOf(key);
        output.splice(index, 1);
      }
    }
    return output;
  },
  filterBrands: brands => {
    let output = [];
    for (let key in brands) {
      // console.log(this.props.brands[key]);
      if (brands[key]) {
        if (!output.includes(key)) {
          output.push(key);
        }
      } else {
        if (output.includes(key)) {
          let index = output.indexOf(key);
          output.splice(index, 1);
        }
      }
    }
    return output;
  },
  sortItems: (products, filteredCategories, filteredBrands) => {
    console.log(filteredBrands, filteredCategories);
    let tempArray = [];
    //if all brands/all categories are false return all items
    for (let i = 0; i < products.length; i++) {
      if (
        filteredCategories.length === 0 ||
        filteredCategories.includes(products[i].category)
      ) {
        if (
          filteredBrands.length === 0 ||
          filteredBrands.includes(products[i].brand)
        ) {
          tempArray.push(products[i]);
        }
      }
    }
    console.log(tempArray);
    return tempArray;
  }
};
