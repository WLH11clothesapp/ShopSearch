import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import LandingProducts from "../Components/LandingProducts/LandingProducts";

const { getProducts } = require("./LandingFunctions");

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

//Cole
it("Gets Products from database", async done => {
  let products;
  await act(async () => {
    products = await getProducts();
    console.log(products);
  });
  expect(products[0].brand).toBe("Kuhl");
  done();
});
