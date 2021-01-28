export const setToLocalStorage = data => {
  window.localStorage.setItem('contacts', JSON.stringify(data));
};

export const getFromLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
};
