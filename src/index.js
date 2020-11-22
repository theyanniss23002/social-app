import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from "./reportWebVitals";
import store from "./redux/reduxStore";
import './index.css';
import App from './App';

export let reloadRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

reloadRender(store.getState());

store.subscribe( () => {
  let state = store.getState();
  reloadRender(state);
});

reportWebVitals();
