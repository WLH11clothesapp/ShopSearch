import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { HashRouter, Link } from 'react-router-dom';

const { getProducts, validate } = require('./Functions');

describe('Testing get products endpoint', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  //Cole 1
  it('Gets Products from database', async done => {
    let products;
    await act(async () => {
      products = await getProducts();
    });
    expect(products[0].brand).toBe('Nordstrom');
    done();
  });
});

describe('Testing our useForm function', () => {
  //Cole 2
  test('makes sure validate function only accepts names longer than 3 chars', () => {
    let errors;
    act(() => {
      errors = validate({ name: 'no' });
    });
    expect(errors.name).toBe('Username needs to be more than 3 characters');
  });
  //Cole 3
  test('makes sure our validate function only accepts properly formatted emails', () => {
    let errors;
    act(() => {
      errors = validate({ email: 'notanemail' });
    });
    expect(errors.email).toBe('Invalid Email address');
  });
  //Cole 4
  test('makes sure our validate function only accepts passwords longer than 2 chars', () => {
    let errors;
    act(() => {
      errors = validate({ password: 'no' });
    });
    expect(errors.password).toBe('Password needs to be more than 2 characters');
  });
  //Cole 5
  test('makes sure validate function requires instagram handle to be formatted correctly', () => {
    let errors;
    act(() => {
      errors = validate({ igHandle: 'handle' });
    });
    expect(errors.igHandle).toBe('follow format @yourHandle');
  });
});

describe("Testing our useForm function doesn't accept empty inputs", () => {
  //Braiden 1
  test('makes sure validate function returns error on empty name input', () => {
    let errors;
    act(() => {
      errors = validate({ name: '' });
    });
    expect(errors.name).toBe('Must enter a name');
  });
  //Braiden 2
  test('makes sure our validate function returns error on empty email input', () => {
    let errors;
    act(() => {
      errors = validate({ email: '' });
    });
    expect(errors.email).toBe('Must enter an email');
  });
  //Braiden 3
  test('makes sure our validate function returns error on empty password input', () => {
    let errors;
    act(() => {
      errors = validate({ password: '' });
    });
    expect(errors.password).toBe('Password is required');
  });
  //Braiden 4
  test('makes sure our validate function returns error on empty igHandle input', () => {
    let errors;
    act(() => {
      errors = validate({ igHandle: '' });
    });
    expect(errors.igHandle).toBe('Must enter an Instagram handle');
  });
});

describe('Testing routing', () => {
  //Braiden 5
  test("make sure that '/' renders the landing page correctly", () => {
    const component = renderer.create(
      <HashRouter>
        <Link to='/' />
      </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  //Mark 1
  test("make sure that '/login' renders the login page correctly", () => {
    const component = renderer.create(
      <HashRouter>
        <Link to='/login' />
      </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  //Mark 2
  test("make sure that '/register' renders the login page correctly", () => {
    const component = renderer.create(
      <HashRouter>
        <Link to='/register' />
      </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  //Mark 3
  test("make sure that '/search' renders the login page correctly", () => {
    const component = renderer.create(
      <HashRouter>
        <Link to='/search' />
      </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  //Mark 4
  test("make sure that '/userprofile' renders the login page correctly", () => {
    const component = renderer.create(
      <HashRouter>
        <Link to='/userprofile' />
      </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  //Mark 5
  test("make sure that '/newpost' renders the login page correctly", () => {
    const component = renderer.create(
      <HashRouter>
        <Link to='/newpost' />
      </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
