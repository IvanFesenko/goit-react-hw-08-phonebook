import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './App.module.css';

import { getContacts } from './redux/selectors.js';
import { getContacts as fetchContacts } from './redux/operations';

import Contacts from './components/Contacts/Contacts';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <Contacts>
          <Filter />
          <ContactList contacts={contacts} />
        </Contacts>
      ) : (
        <p>Your phonebook is empty at this moment</p>
      )}
    </div>
  );
}

export default App;
