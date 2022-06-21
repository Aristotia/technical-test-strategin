import React from 'react';

export default function ConnexionInterface({
  onChange,
  handleRegister,
}) {
  return (
    <div className='RegisterInterface'>
      <div className='connexion-component'>
        <form onSubmit={handleRegister}>
          <h3>Prénom: </h3>
          <label htmlFor='firstName'>
            <input
              type='text'
              name='firstName'
              onChange={onChange}
              id='registerFirstname'
            />
          </label>
          <h3>Nom: </h3>
          <label htmlFor='lastName'>
            <input
              type='text'
              name='lastName'
              onChange={onChange}
              id='registerLastName'
            />
          </label>
          <h3>Email: </h3>
          <label htmlFor='email'>
            <input
              type='email'
              name='email'
              onChange={onChange}
              id='registerEmail'
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
          <input type='submit' value={`S'enregistrer`} id='inputSubmit' />
        </form>
      </div>
    </div>
  );
}
