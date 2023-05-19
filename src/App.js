import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import PropertyDetails from './Pages/PropertyDetails';
const App = () => {
  return( 
  <div className='max-w-[1440px] mx-auto bg-white lg:px-8'> 
    <Header/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/property/:id' element={<PropertyDetails />}/>
    </Routes>
    <Footer/>
  </div>
  )
};

export default App;
