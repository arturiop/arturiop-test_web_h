import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router';
import { store } from '../config/store';
import { PageComments } from '../pages/PageComments';
import NotFound from './ui/404/NotFound';

export const App = () => (
  <div style={{ backgroundColor: '#dce3e3' }}>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/comments" />} />
      <Route path="/comments" render={() => <PageComments />} />
      <Route path="*" render={() => <NotFound />} />
    </Switch>
  </div>
);

export const MainApp = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
