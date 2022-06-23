import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConnexionInterface from '../Components/Unique/ConnexionInterface';
import Header from '../Components/Commons/Header';
import RegisterInterface from '../Components/Unique/RegisterInterface';
import '../CSS/global.css';
import Footer from '../Components/Commons/Footer';

export default function App() {
  const [display, setDisplay] = useState(true);
  const [popup, setPopup] = useState(false);
  let navigate = useNavigate();
  const handleInterfaceDisplay = () => {
    setDisplay(!display);
  };

  const handleConnexion = (data) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, data)
      .then(() => {
        navigate('/users', { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleRegister = (data) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users/register`, data)
      .then((data) => console.log(data), setPopup(!popup))
      .catch((error) => console.error(error));
  };

  return (
    <div className='App'>
      <Header />
      <main className='connexion-page'>
        <div className='interface-container'>
          <div className='button-container'>
            <button type='button' onClick={handleInterfaceDisplay}>
              <h3>Se connecter</h3>
            </button>
            <button type='button' onClick={handleInterfaceDisplay}>
              <h3>Créer un compte</h3>
            </button>
          </div>
          {display ? (
            <ConnexionInterface
              handleConnexion={handleConnexion}
            />
          ) : (
            <RegisterInterface
              handleRegister={handleRegister}
            />
          )}
        </div>
        {popup ? (
          <div className='popup-container'>
            <h3>Enregistrement réussi !</h3>
            <button
              type='button'
              onClick={() => {
                setPopup(!popup);
                setDisplay(!display);
              }}
            >
              Fermer
            </button>
          </div>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
