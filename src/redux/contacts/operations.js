import * as contactsAPI from '../../services/contactsAPI';
import actions from './actions';

export const getContacts = () => async dispatch => {
  dispatch(actions.getContactsRequest());
  try {
    const contacts = await contactsAPI.getContacts();
    dispatch(actions.getContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.getContactsReject(error));
  }
};

export const addContact = (name, number) => async dispatch => {
  dispatch(actions.addContactRequest());
  try {
    const contact = { name, number };
    const response = await contactsAPI.addContact(contact);
    dispatch(actions.addContactSuccess(response.data));
  } catch (error) {
    dispatch(actions.addContactReject(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(actions.getContactsRequest());
  try {
    await contactsAPI.deleteContact(id);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactReject(error));
  }
};
