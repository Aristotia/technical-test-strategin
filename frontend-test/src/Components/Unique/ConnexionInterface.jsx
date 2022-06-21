import React from 'react';

export default function ConnexionInterface({
  onChange,
  handleConnexion,
}) {
  return (
    <div className='connexionInterface'>
      <div className='connexion-component'>
        <form onSubmit={handleConnexion}>
          <h3>Email: </h3>
          <label htmlFor='email'>
            <input
              type='email'
              name='email'
              onChange={onChange}
              id='loginEmail'
            />
          </label>
          <h3>Mot de passe: </h3>
          <label htmlFor='password'>
            <input
              type='password'
              name='password'
              onChange={onChange}
              id='loginPassword'
            />
          </label>
          <input type='submit' value='Se connecter' id='inputSubmit' />
        </form>
      </div>
    </div>
  );
}
