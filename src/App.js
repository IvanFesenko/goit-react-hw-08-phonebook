import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './App.module.css';

import { getContacts } from './redux/contacts/selectors.js';
import { authOperations, authSelectors } from './redux/auth';
import { getContacts as fetchContacts } from './redux/contacts/operations';

import Header from './components/Header';
import Contacts from './components/Contacts/Contacts';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import UserForm from './components/UserForm';

function App() {
  const contacts = useSelector(getContacts);
  const checkingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const userLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (userLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, userLoggedIn]);

  return (
    <>
      <Header />

      <div className={styles.container}>
        {!userLoggedIn ? (
          <UserForm />
        ) : (
          <>
            <ContactForm />

            {contacts.length > 0 ? (
              <Contacts>
                <Filter />
                <ContactList contacts={contacts} />
              </Contacts>
            ) : (
              <p>Your phonebook is empty at this moment</p>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
