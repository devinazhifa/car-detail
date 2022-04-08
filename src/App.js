import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Pages/Home';
import Car from './Components/Pages/Car';

const App = () => {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/car/:id' element={<Car/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;