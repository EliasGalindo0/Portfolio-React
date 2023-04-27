import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Provider from './context/Provider';
import Achievements from './Pages/Achievements';
import Login from './Pages/Login';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/achievements" element={ <Achievements /> } exact />
        <Route path="/signin" element={ <Login /> } exact />
        <Route path="/Portfolio-React/" element={ <Home /> } exact />
      </Routes>
    </Provider>
  );
}

export default App;
