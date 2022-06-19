import React from 'react';

export default function ConnexionInterface({
  handleChangeEmail,
  handleChangePassword,
  handleConnexion,
}) {
  return (
    <div className='connexionInterface'>
      <div className='connexion-component'>
        <form onSubmit={handleConnexion}>
          <h3>Email: </h3>
          <label htmlFor='email'>
            <input type='email' onChange={handleChangeEmail} id='loginEmail' />
          </label>
          <h3>Mot de passe: </h3>
          <label htmlFor='password'>
            <input
              type='password'
              onChange={handleChangePassword}
              id='loginPassword'
            />
          </label>
          <input type='submit' value='Se connecter' id='inputSubmit' />
        </form>
      </div>
    </div>
  );
}
