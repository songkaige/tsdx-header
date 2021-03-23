import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HeaderRight } from '../.';

const App = () => {
  return (
    <div>
      <HeaderRight isHostUser={true} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
