import * as React from 'react';
import * as ReactDOM from 'react-dom';

// TODO: Change to absolute
import Main from '@components/pages/Main';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Main />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
