import { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AuthForm from '../AuthForm';
import RegistrationForm from '../RegistrationForm';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function UserForm() {
  const [tab, setTab] = useState(0);

  const handleChange = (_, tabNum) => setTab(tabNum);

  return (
    <>
      <div>
        <Tabs value={tab} onChange={handleChange}>
          <Tab label="Authorization" {...a11yProps(0)} />
          <Tab label="Registration" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={tab} index={0}>
          <AuthForm />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <RegistrationForm />
        </TabPanel>
      </div>
    </>
  );
}

export default UserForm;
