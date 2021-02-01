import 'react-phone-number-input/style.css';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import isUniqueContact from '../../services/isUniqueContact';

import PhoneInput, { formatPhoneNumberIntl } from 'react-phone-number-input';

import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = event => {
    console.log(event);
    if (isUniqueContact(contacts, name)) {
      dispatch(addContact(name, number));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const handleNumberChange = e => {
    const value = formatPhoneNumberIntl(String(e));
    setNumber(value);
  };

  return (
    <form onSubmit={onSubmit} className={s.form}>
      <label htmlFor="formName">
        Name
        <input
          id="formName"
          className={s.formName}
          type="text"
          name="name"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label htmlFor="formNumber">
        Number
        <PhoneInput
          id="formNumber"
          // className={s.formNumber}
          type="tel"
          name="number"
          placeholder="Number"
          onChange={handleNumberChange}
          onFocus={() => {}}
        />
      </label>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}

// function ContactForm({ onAddContact }) {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = event => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     onAddContact(name, number);
//   };

//   return (
//     <form onSubmit={handleSubmit} className={s.form}>
//       <label htmlFor="formName">
//         Name
//         <input
//           required
//           id="formName"
//           className={s.formName}
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={name}
//           onChange={handleChange}
//         />
//       </label>
//       <label htmlFor="formNumber">
//         Number
//         <input
//           id="formNumber"
//           className={s.formNumber}
//           type="tel"
//           name="number"
//           placeholder="Number"
//           value={number}
//           required
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit" className={s.btn}>
//         Add contact
//       </button>
//     </form>
//   );
// }

export default ContactForm;
