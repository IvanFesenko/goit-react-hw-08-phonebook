import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// import actions from '../../redux/actions';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import isUniqueContact from '../../services/isUniqueContact';

import s from './ContactForm.module.css';

function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = ({ name, number }) => {
    if (isUniqueContact(contacts, name)) {
      dispatch(addContact(name, number));
      reset();
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <label htmlFor="formName">
        Name {errors.name && ' is required.'}
        <input
          id="formName"
          className={s.formName}
          type="text"
          name="name"
          placeholder="Name"
          ref={register({ required: true, min: 2, maxLength: 30 })}
        />
      </label>
      <label htmlFor="formNumber">
        Number {errors.number && ' is required.'}
        <input
          id="formNumber"
          className={s.formNumber}
          type="tel"
          name="number"
          placeholder="Number"
          ref={register({
            required: true,
            min: 8,
            maxLength: 12,
            pattern: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i,
          })}
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
