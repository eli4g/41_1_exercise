import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <NavBar />
            <Routes>
            <Route exact path="*" element={<VendingMachine/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
