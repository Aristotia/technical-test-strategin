import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Components/Commons/Footer';
import Header from '../Components/Commons/Header';
import '../CSS/Accueil.css';

export default function () {
  const [dataUsers, setDataUsers] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/users').then((response) => {
      setDataUsers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className='UserManagement'>
      <Header />
      <div className='users-page'>
        <h2>Utilisateurs enregistrés</h2>
        <div className='users-container'>
          {dataUsers &&
            dataUsers.map((user) => (
              <div className='user-item'>
                <h3>
                  {user.firstName}
                  {user.lastName}
                </h3>
                <h3>{user.email}</h3>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
