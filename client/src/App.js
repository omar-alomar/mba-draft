import React from 'react';
import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Announcements from './pages/Announcements';
import Contacts from './pages/Contacts';
import Links from './pages/Links';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar className="navbar" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/announcements' element={<Announcements />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/links' element={<Links />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
