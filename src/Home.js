import React from "react";
import {BrowserRouter, Route, Link,Routes} from "react-router-dom";
import "./Home.css";


function Home() {
  return (
    <div>
      <h1>What would you like to eat?</h1>
        <Link exact="true" to="/chips">Chips</Link>
        <Link exact="true" to="/soda">Soda</Link>
        <Link exact="true" to="/coffee">Coffee</Link>
    </div>
  );
}

export default Home;
