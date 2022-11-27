import { CssBaseline } from '@mui/material';
import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/bio/", element: <Home /> }
  ]);

  return routes;
}

function App() {
  return (
    <React.StrictMode>
      <CssBaseline />
      <Navbar />
      <Router>
        <AppRoutes />
      </Router>

    </React.StrictMode>
  );
}

export default App;
