import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/DashBoard/HomePage';
import { MainDashboard } from './Components/DashBoard/MainDashboard';

function App() {


  return (
    <>
      <div className="container-fluid">
        {/*  creating routes  */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/mainDashboard' element={<MainDashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
