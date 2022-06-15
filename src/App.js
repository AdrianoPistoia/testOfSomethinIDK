import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import  ArchivedListing  from './components/ArchivedListing.js';
import {Home} from './components/Home.js';
import Navbar from './components/Navbar.js';
import Notes from './components/Notes.js';
export const App = () => {
  
  return(
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container">
          <Routes>
              <Route exact="true" path="/" element={<Home/>}/>
              <Route path="/Notes" element={<Notes/>}/> 
              <Route path="/ArchivedListing" element={<ArchivedListing/>}/> 
          </Routes>
      </div>
    </BrowserRouter>
  );
}