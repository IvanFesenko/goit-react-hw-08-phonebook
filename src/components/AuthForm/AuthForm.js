import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/';

import s from './AuthForm.module.css';

function AuthForm({ styles }) {
  const { register, handleSubmit, errors, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = ({ userMail, password }) => {
    dispatch(authOperations.logIn({ email: userMail, password }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles}>
      <label htmlFor="userMail">e-mail</label>
      <input
        type="mail"
        name="userMail"
        id="userMail"
        placeholder="e-mail..."
        ref={register()}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        placeholder="password..."
        id="password"
        ref={register()}
      />
      <button className={s.btn} type="submit">
        Log in
      </button>
    </form>
  );
}

export default AuthForm;
