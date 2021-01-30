import { useForm } from 'react-hook-form';

import s from './RegistrationForm.module.css';

function RegistrationForm({ styles }) {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = ({ userName, userMail, password }) => {};

  return (
    <form className={styles} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="userName">User name</label>
      <input
        type="text"
        name="userName"
        id="userName"
        placeholder="User name..."
        ref={register({ required: true, min: 3 })}
      />
      <label htmlFor="userMail">
        e-mail {errors.userMail && console.log(errors)}
      </label>
      <input
        type="mail"
        name="userMail"
        id="userMail"
        placeholder="e-mail..."
        ref={register({
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,
        })}
      />
      <label htmlFor="password">
        Password {errors.password && console.log(errors)}
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password..."
        ref={register({ required: true, min: 7 })}
      />
      <button className={s.btn} type="submit">
        Sing Up
      </button>
    </form>
  );
}

export default RegistrationForm;
