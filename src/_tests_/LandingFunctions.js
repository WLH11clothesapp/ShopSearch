//This file is for the functions in landing.js to use in the testing file
import axios from "axios";

module.exports = {
  getProducts: async () => {
    let data;
    await axios
      .get("http://localhost:5050/api/products")
      .then(res => (data = res.data))
      .catch(err => console.log(err));
    return data;
  }
};
