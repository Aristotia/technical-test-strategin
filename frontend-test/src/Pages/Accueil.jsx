import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConnexionInterface from '../Components/Unique/ConnexionInterface';
import Header from '../Components/Commons/Header';
import RegisterInterface from '../Components/Unique/RegisterInterface';
import '../CSS/Accueil.css';
import Footer from '../Components/Commons/Footer';

export default function App() {
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });
  const [display, setDisplay] = useState(true);
  let navigate = useNavigate();
  const handleInterfaceDisplay = () => {
    setDisplay(!display);
  };

  const handleConnexion = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/users/login', {
        email: email,
        password: password,
      })
      .then(() => {
        navigate('/users', { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleRegister = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/users/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const onChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };

  const { firstName, lastName, email, password } = form;

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
              onChange={onChange}
              handleConnexion={handleConnexion}
            />
          ) : (
            <RegisterInterface
              onChange={onChange}
              handleRegister={handleRegister}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
