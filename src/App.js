import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className='App'>{routes}</div>
      </HashRouter>
    </Provider>
  );
};

export default App;
