import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/contacts/actions';
import { getFilter } from '../../redux/contacts/selectors';

import styles from './Filter.module.css';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <label>
        Find Contacts by name
        <input
          type="text"
          className={styles.input}
          value={filter}
          onChange={e => dispatch(actions.filterContacts(e.target.value))}
        />
      </label>
    </div>
  );
}

export default Filter;
