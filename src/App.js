import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Content from './components/Content/Content'

const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <Content state={props.state}/>
    </div>
  );
}

export default App;
