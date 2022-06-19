import React from 'react';

export default function ConnexionInterface({ handleChangeFirstname, handleChangeLastname, handleChangeEmail, handleChangePassword, handleRegister }) {
  return (
    <div className='RegisterInterface'>
      <div className='connexion-component'>
        <form onSubmit={handleRegister}>
          <h3>Prénom: </h3>
          <label htmlFor='firstname'>
            <input
              type='text'
              onChange={handleChangeFirstname}
              id='registerFirstname'
            />
          </label>
          <h3>Nom: </h3>
          <label htmlFor='lastname'>
            <input
              type='text'
              onChange={handleChangeLastname}
              id='registerLastname'
            />
          </label>
          <h3>Email: </h3>
          <label htmlFor='email'>
            <input
              type='email'
              onChange={handleChangeEmail}
              id='registerEmail'
            />
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
