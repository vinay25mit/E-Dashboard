import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponents';
import Login from "./components/Login";
import Clogin from "./components/Clogin"
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UsignUp from "./components/UsignUp"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/add' element={<AddProduct/>}/>
          
          <Route path='/logout' element={<h1> logout products components</h1>}/>
          <Route path='/profile' element={<h1> profile products components</h1>}/>
          
          
          
        </Route>
        <Route path='/signup' element={<SignUp/> }/>
        <Route path='/UsignUp' element={<UsignUp/>}/>
        <Route path='/login' element={<Login/> }/>
        <Route path="/ulogin" element={<Clogin/>}/>
        
        


        
      
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
