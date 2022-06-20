import axios from 'axios';
import { useState } from 'react';
import ConnexionInterface from '../Components/Unique/ConnexionInterface';
import Header from '../Components/Commons/Header';
import RegisterInterface from '../Components/Unique/RegisterInterface';
import '../CSS/Accueil.css';
import Footer from '../Components/Commons/Footer';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(true);

  const handleConnexionDisplay = () => {
    setDisplay(!display);
  };

  const handleConnexion = (event, data) => {
    event.preventDefault();

    axios
      .post(
        `mongodb+srv://Antoine:bangarang@test-strategin.gwwcb6x.mongodb.net/?retryWrites=true&w=majority` ??
          'http://localhost:27017',
        {
          email: email,
          password: password,
        }
      )
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleRegister = (event, data) => {
    event.preventDefault();

    axios
      .post(
        `mongodb+srv://Antoine:bangarang@test-strategin.gwwcb6x.mongodb.net/?retryWrites=true&w=majority` ??
          'http://localhost:27017',
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        }
      )
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeFirstname = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeLastname = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className='App'>
      <Header />
      <main className='connexion-page'>
        <div className='interface-container'>
          <div className='button-container'>
            <button type='button' onClick={handleConnexionDisplay}>
              <h3>Se connecter</h3>
            </button>
            <button type='button' onClick={handleConnexionDisplay}>
              <h3>Créer un compte</h3>
            </button>
          </div>
          {display ? (
            <ConnexionInterface
              handleChangeEmail={handleChangeEmail}
              handleChangePassword={handleChangePassword}
              handleConnexion={handleConnexion}
            />
          ) : (
            <RegisterInterface
              handleChangeFirstname={handleChangeFirstname}
              handleChangeLastname={handleChangeLastname}
              handleChangeEmail={handleChangeEmail}
              handleChangePassword={handleChangePassword}
              handleRegister={handleRegister}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
