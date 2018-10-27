import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css';

import App from '@components/templates/App';
import theme from '@constants/theme';

import registerServiceWorker from './registerServiceWorker';

const app = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(app, document.getElementById('root') as HTMLElement);
registerServiceWorker();
