import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://goit-phonebook-api.herokuapp.com',
});

export const setAuthToket = token => {
  Axios.defaults.headers.common['Authorization'] = token;
};

export const getContacts = async () => {
  const { data } = await Axios.get('/contacts');
  return data;
};

export const addContact = async contact => {
  await Axios.post('/contacts', contact);
};

export const deleteContact = async id => {
  await Axios.delete(`/contacts/${id}`);
};

export const updateContact = async (id, contact) => {
  await Axios.patch(`/contacts/${id}`, contact);
};

export const authSingUp = async userInfo => {
  const response = await Axios.post('/users/singup', userInfo);
  return response;
};

export const authLogIn = async authData => {
  const response = await Axios.post('/users/login', authData);
  return response;
};

export const authLogOut = async () => {
  const response = await Axios.post('/users/logout');
  return response;
};

export const authCurrentUser = async () => {
  const response = await Axios.get('/users/current');
  return response;
};
