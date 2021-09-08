import React,{ Fragment } from 'react';
import './App.css';

//Component

import InputVisitor from "./components/InputVisitor";
import ListVisitor from "./components/ListVisitor";

function App() {
  return (
    <Fragment>

      <div className="container">
      <InputVisitor/>
      <ListVisitor/>
      </div>
     

    </Fragment>
  );
}

export default App;
