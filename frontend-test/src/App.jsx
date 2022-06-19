import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil';
import UserManagement from './Pages/UserManagement';

export default function () {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/users' element={<UserManagement />} />
        </Routes>
      </Router>
    </div>
  );
}
