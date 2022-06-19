import axios from 'axios';
import { useState } from 'react';
import '../CSS/Accueil.css';

export default function App() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (event, data) => {
    event.preventDefault();

    axios.get(`mongodb+srv://<username>:<password>@test-strategin.gwwcb6x.mongodb.net/?retryWrites=true&w=majority` ?? "http://localhost:27017", {
      email: email,
      password: password,
    }).then((data) => console.log(data))
    .catch((error) => console.error(error));
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  
  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>My technical test for Strateg.in</h1>
      </header>
      <main className='connexion-page'>
        <div className='connexion-component'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='email'>
              <input type='email' onChange={handleChangeEmail} id="loginEmail"  />
            </label>
            <label htmlFor='password'>
              <input type='password' onChange={handleChangePassword} id="loginPassword" />
            </label>
            <input type="submit" value="Se connecter" />
          </form>
        </div>
      </main>
    </div>
  );
}
