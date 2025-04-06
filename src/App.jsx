import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Completed from './pages/Completed'
import ReactPixel from 'react-facebook-pixel';

function App() {

  useEffect(() => {
    // Initialize Meta Pixel
    const options = { autoConfig: true, debug: true };
    ReactPixel.init("1124352522216596", options);
    ReactPixel.pageView(); // Track page views
  }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='completed' element={<Completed />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
