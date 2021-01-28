import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AuthForm from '../AuthForm';
import RegistrationForm from '../RegistrationForm';

function UserForm() {
  return (
    <>
      <div>
        <RegistrationForm />
        <AuthForm />
      </div>
    </>
  );
}

export default UserForm;
