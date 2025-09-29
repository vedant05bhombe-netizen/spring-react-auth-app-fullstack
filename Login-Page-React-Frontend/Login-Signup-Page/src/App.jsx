import { useState } from 'react';
import './App.css';
import './Login'
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>   
   <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login/>} /> 
           <Route path="/signup" element={<Signup/>} /> 
           <Route path="/home" element={<Home/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
