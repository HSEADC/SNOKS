import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';


//ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(

      <App />

  );