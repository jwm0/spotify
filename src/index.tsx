import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import 'sanitize.css';

import App from '@components/templates/App';
import theme from '@constants/theme';
import store from '@store/index';

import registerServiceWorker from './registerServiceWorker';

const app = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root') as HTMLElement);
registerServiceWorker();
