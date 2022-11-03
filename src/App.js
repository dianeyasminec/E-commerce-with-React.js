import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Store from './components/Store';
import Teams from './components/Teams';
import {CartProvider} from 'react-use-cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.style/app.css';
import Footer from './components/Footer'


function App() {
  return (
    <CartProvider>
    <BrowserRouter> 
      <Routes> 
        <Route   path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='store' element={<Store  />}/>
          <Route path='teams' element={<Teams/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </CartProvider>
    
  );
}

export default App;
