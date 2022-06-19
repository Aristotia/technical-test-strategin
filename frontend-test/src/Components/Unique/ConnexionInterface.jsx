import React from "react";
import '../CSS/ConnexionInterface.css';

export default function ConnexionInterface() {
  return(
    <div className='connexion-component'>
    <h2>Connexion</h2>
    <form onSubmit={handleSubmit}>
      <h3>Email: </h3>
      <label htmlFor='email'>
        <input
          type='email'
          onChange={handleChangeEmail}
          id='loginEmail'
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
  );
}