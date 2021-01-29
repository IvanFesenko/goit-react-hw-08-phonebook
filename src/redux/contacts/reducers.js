import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
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
} from './actions';

const contactsReducer = createReducer([], {
  [getContactsSuccess]: (state, action) => action.payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) => {
    const result = state.filter(contact => contact.id !== action.payload);
    return result;
  },
});

const filterReducer = createReducer('', {
  [filterContacts]: (state, action) => {
    return action.payload;
  },
});

const isLoadingReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsReject]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactReject]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactReject]: () => false,
});

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
});

export default reducer;
