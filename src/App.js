import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Content/>
      </div>
    </BrowserRouter>
  );
}

export default App;
