import { useForm } from 'react-hook-form';

function AuthForm() {
  const { register, handleSubmit, errors, reset } = useForm();

  return (
    <form>
      <label htmlFor="userMail">e-mail</label>
      <input type="mail" name="userMail" id="userMail" />
      <label htmlFor="password">password</label>
      <input type="password" name="password" id="password" />
    </form>
  );
}

export default AuthForm;
