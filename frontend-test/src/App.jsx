import React from 'react';
import { Route } from 'react-router-dom';
import Accueil from './Pages/Accueil';

export default function () {
  return (
    <div>
      <Router>
        <Routes>
          <Route>
            <Accueil path='/' />
          </Route>
          <Route>
            <UserManagement path='/users' />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
