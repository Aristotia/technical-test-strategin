import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function ConnexionInterface({ onChange, handleRegister }) {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(`L'email est requis`),
    password: yup.string().required(`Le mot de passe est requis`),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState ;
  return (
    <div className='RegisterInterface'>
      <div className='connexion-component'>
        <form onSubmit={handleSubmit(handleRegister)}>
          <h3>Prénom: </h3>
          <label htmlFor='firstName'>
            <input
              type='text'
              name='firstName'
              id='registerFirstname'
              {...register('firstName')}
            />
          </label>
          <h3>Nom: </h3>
          <label htmlFor='lastName'>
            <input
              type='text'
              name='lastName'
              id='registerLastName'
              {...register('lastName')}
            />
          </label>
          <h3>Email: </h3>
          <label htmlFor='email'>
            <input
              type='email'
              name='email'
              id='registerEmail'
              {...register('email')}
            />
          </label>
          <h3>Mot de passe: </h3>
          <label htmlFor='password'>
            <input
              type='password'
              id='loginPassword'
              {...register('password')}
            />
          </label>
          <input type='submit' value={`S'enregistrer`} id='inputSubmit' />
        </form>
      </div>
    </div>
  );
}
