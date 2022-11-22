import { CssBaseline } from '@mui/material';
import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.StrictMode>
      <CssBaseline />
      <Navbar />
      <Home />
    </React.StrictMode>
  );
}

export default App;
