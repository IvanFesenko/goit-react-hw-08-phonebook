import { createSelector } from 'reselect';

export const contactsSelector = ({ phoneBook }) => phoneBook.contacts;
export const filterSelector = ({ phoneBook }) => phoneBook.filter;

export const getVisibleContacts = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    if (filter) {
      return contacts.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase());
      });
    }
    return contacts;
  },
);

export const getFilter = createSelector(filterSelector, filter => {
  return filter;
});

export const getContacts = createSelector(contactsSelector, contacts => {
  return contacts;
});
