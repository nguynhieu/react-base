
import _ from 'lodash';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';

import { Auth } from 'app/containers';
import MainRoute from './route';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

import 'bootstrap/dist/css/bootstrap.min.css';

const FodRoute = ({ component: Component, path, ...rest }) => {
  const accessToken = localStorage.getItem('accessToken');

  if (!_.startsWith(path, '/auth') && !accessToken) {
    return <Redirect to="/auth" />;
  }

  if (_.startsWith(path, '/auth') && accessToken) {
    return <Redirect to="/" />;
  }

  return (
    <div className="fade show">
      <Route {...rest} path={path} component={Component} />
    </div>
  );
};

export function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Foodease"
        defaultTitle="Foodease"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Foodease application" />
      </Helmet>
      <Switch>
        <FodRoute
          path={process.env.PUBLIC_URL + '/auth'}
          component={Auth}
        />
        <FodRoute path={process.env.PUBLIC_URL + '/'} component={MainRoute} />

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
