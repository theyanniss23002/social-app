import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Content state={props.state}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
