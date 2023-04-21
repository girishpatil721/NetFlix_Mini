import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import Home from './Pages/Home';
import Player from './components/Player';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavScrollExample from './Navbar/Appbar';
import NotFound from './components/NotFound';
import About from './Pages/About';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <NavScrollExample/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/player' element={<Player/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}


