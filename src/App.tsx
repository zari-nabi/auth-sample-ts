import React from 'react';
import './App.scss';
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
