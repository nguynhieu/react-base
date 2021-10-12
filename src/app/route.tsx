import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';

import { Header, Sidebar } from 'app/components/Layouts';
import { Shop } from 'app/containers/Shop/Loadable';

export default function MainRoute() {
  return (
    <Container>
      <Header />
      <div className="main">
        <Sidebar />
        <div className="mainContainer">
          <Switch>
            <Route exact path="/shop" component={Shop} />
            <Redirect to="/shop" />
          </Switch>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
`;
