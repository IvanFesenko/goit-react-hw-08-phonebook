import { createAction } from '@reduxjs/toolkit';

export const filterContacts = createAction(
  'phoneBook/filterContacts',
  filter => ({
    payload: filter,
  }),
);

export const getContactsRequest = createAction('contacts/getContactsRequest');
export const getContactsSuccess = createAction('contacts/getContactsSuccess');
export const getContactsReject = createAction('contacts/getContactsReject');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactReject = createAction('contacts/addContactReject');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactReject = createAction('contacts/deleteContactReject');

const actions = {
  getContactsRequest,
  getContactsSuccess,
  getContactsReject,
  addContactRequest,
  addContactSuccess,
  addContactReject,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactReject,
  filterContacts,
};

export default actions;
