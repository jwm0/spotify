import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components'
import 'sanitize.css';

import App from '@components/templates/App';
import theme from '@constants/theme';
import store from '@store/index';
import '@services/firebase';

import registerServiceWorker from './registerServiceWorker';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #191814;
    overscroll-behavior: none;
  }
`;

const app = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <App />
      </>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root') as HTMLElement);
registerServiceWorker();
