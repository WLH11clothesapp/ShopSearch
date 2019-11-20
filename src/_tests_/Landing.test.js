import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import Landing from "../../server";

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
it("Renders Mapped Components", () => {
  act(() => {
    render(<Landing />, container);
  });
  expect(container.textContent).toContain("Kuhl");
});
