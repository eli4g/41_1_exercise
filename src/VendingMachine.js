import React from "react";
import {BrowserRouter, Route, Link,Routes} from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Chips from './Chips';
import Soda from './Soda';
import Coffee from './Coffee';


function VendingMachine() {
  return (
    
    <div>


            
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/chips" element={<Chips/>}></Route>
            <Route exact path="/soda" element={<Soda/>}></Route>
            <Route exact path="/coffee" element={<Coffee/>}></Route>
        </Routes>
     

    </div>
    
  );
}

export default VendingMachine;