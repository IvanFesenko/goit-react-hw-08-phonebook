const isUniqueContact = (contacts, newName) => {
  const index = contacts.findIndex(
    ({ name }) => name.toLowerCase() === newName.toLowerCase().trim(),
  );
  return index === -1 ? true : false;
};

export default isUniqueContact;
