import DeleteButton from './DeleteButton';
import s from './ContactList.module.scss';

function ContactListItem({ info, onDeleteHandler }) {
  return (
    <li className={s.item}>
      <p className={s.wrap}>
        <span className={s.name}>{info.name}</span>
        <a href={`tel:${info.number}`} className={s.phone}>
          {info.number}
        </a>
      </p>
      <DeleteButton handler={onDeleteHandler} />
    </li>
  );
}

export default ContactListItem;
