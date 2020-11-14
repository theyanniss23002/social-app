import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost, listenNewChange} from "./state";

export let reloadRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addNewPost={addNewPost} listenNewChange={listenNewChange}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
