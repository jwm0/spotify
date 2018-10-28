import * as React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

// static
import Navigation from '@components/organisms/Navigation';
import Content from '@components/templates/Content';
import Playbar from '@components/organisms/Playbar';

// routes
import Main from '@components/pages/Main';
import Search from '@components/pages/Search';

import { Wrapper } from './styles';

const AppRouter = () => (
  <Router>
    <Wrapper>
      <Navigation />
      <Playbar />
      <Content>
        <Route path="/browse" exact component={Main} />
        <Route path="/search" component={Search} />
      </Content>
    </Wrapper>
  </Router>
);

export default AppRouter;
