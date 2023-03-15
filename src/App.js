import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './component/Navbar';
import Pricing from './component/Pricing';
import Save from './component/Save';
import Started from './component/Started';
import Works from './component/Works';
import Footer from './component/Footer';
import Home from './component/pages/Home';
import Login from './component/pages/Login';
import Error from './component/pages/Error';
import Register from './component/pages/Register';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/works' exact element={<Works/>}></Route>
          <Route path='/save' exact element={<Save/>}></Route>
          <Route path='/started' exact element={<Started/>}></Route>
          <Route path='/pricing' exact element={<Pricing/>}></Route>
          <Route path='/login' exact element={<Login/>}></Route>
          <Route path='/register' exact element={<Register/>}></Route>
          <Route path='*' exact element={<Error/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
