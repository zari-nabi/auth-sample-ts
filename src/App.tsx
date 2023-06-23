import React from 'react';
import './App.scss';
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './routes/AllRouts';

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
