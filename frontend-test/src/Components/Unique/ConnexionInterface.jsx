import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function ConnexionInterface({ handleConnexion }) {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required(`L'email est requis`),
    password: yup.string().required(`Le mot de passe est requis`),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit } = useForm(formOptions);
  return (
    <div className='connexionInterface'>
      <div className='connexion-component'>
        <form onSubmit={handleSubmit(handleConnexion)}>
          <h3>Email: </h3>
          <label htmlFor='email'>
            <input
              type='email'
              name='email'
              id='loginEmail'
              {...register('email')}
            />
          </label>
          <h3>Mot de passe: </h3>
          <label htmlFor='password'>
            <input
              type='password'
              name='password'
              id='loginPassword'
              {...register('password')}
            />
          </label>
          <input type='submit' value='Se connecter' id='inputSubmit' />
        </form>
      </div>
    </div>
  );
}
