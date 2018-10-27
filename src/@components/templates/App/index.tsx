import * as React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from '@components/pages/Main';
import Navigation from '@components/organisms/Navigation';
import Playbar from '@components/organisms/Playbar';

import { Wrapper } from './styles';

const AppRouter = () => (
  <Router>
    <Wrapper>
      <Navigation />
      <Playbar />
      <Route path="/" exact component={Main} />
    </Wrapper>
  </Router>
);

export default AppRouter;
