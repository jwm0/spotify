import * as React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

// static
import Navigation from '@components/organisms/Navigation';
import Content from '@components/templates/Content';
import Playbar from '@components/organisms/Playbar';
import Gradient from '@components/templates/Gradient';

// routes
import Main from '@components/pages/Main';
import Search from '@components/pages/Search';
import SongResults from '@components/pages/SongResults';
import Playlist from '@components/pages/Playlist';
import Library from '@components/pages/Library';

import { Wrapper } from './styles';

const AppRouter = () => (
  <Router>
    <Wrapper>
      <Gradient />
      <Navigation />
      <Playbar />
      <Content>
        <Route path="/browse" exact component={Main} />
        <Route path="/search" exact component={Search} />
        <Route path="/search/songs/:query" component={SongResults} />
        <Route path="/playlist/:id" component={Playlist} />
        <Route path="/library" component={Library} />
      </Content>
    </Wrapper>
  </Router>
);

export default AppRouter;
