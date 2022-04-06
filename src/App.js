import React from 'react';
import Image from './component/Image';
import Header from './component/Header';
import Searchbar from './component/Searchbar';
import Randomnumber from './component/Randomgenerator';
import {Randomtitle} from './component/Randomgenerator';
import {MyName} from './component/Randomgenerator';
import Number from './component/Number';
import './style/App.css';

function App() {
  // For checkpoint 1: Write code here similar to Demo2.js
  // Hint: Create an array and map each element to JSX (the Card component), then add it to the JSX you're returning


  
  return (
    // Type your website layout here...
    <div id="page">
      <div id="top">
        <hr />
        <Header />

        <hr />
        <div id="right">
          {<Randomtitle name="Random Pokemon Generator"/>}
      
          {<Number randomnum={Randomnumber ()} />}
          <Searchbar/>
        </div>
        {<Image/>}
      
      </div>
      <div id="bottom">
        <hr />
        
        {<MyName/>}
        </div>
    </div>
      
  );
}

export default App;
