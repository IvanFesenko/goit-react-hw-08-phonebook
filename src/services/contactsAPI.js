import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3004',
});

export const getContacts = async () => {
  const { data } = await Axios.get('/contacts?_sort=name');
  return data;
};

export const addContact = async contact => {
  await Axios.post('/contacts', contact);
};

export const deleteContact = async id => {
  await Axios.delete(`/contacts/${id}`);
};
