import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from "./reportWebVitals";
import state, {subscribe} from "./state";
import './index.css';
import App from './App';
import {
  addNewPost, listenNewPostChange,
  sendNewMyMessage, listenNewMyMessage, getDataDiagram

} from "./state";

export let reloadRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
           addNewPost={addNewPost} listenNewPostChange={listenNewPostChange}
           sendNewMyMessage={sendNewMyMessage} listenNewMyMessage={listenNewMyMessage}
           getDataDiagram={getDataDiagram}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


reloadRender(state);

subscribe(reloadRender);

reportWebVitals();
