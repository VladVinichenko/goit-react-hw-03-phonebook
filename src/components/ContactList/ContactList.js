import s from './ContactList.module.css'
import DeleteButton from '../DeleteButton/DeleteButton'
import propTypes from 'prop-types';

const ContactList = ({ renderList, onDeleteContact }) => {
  return renderList.length > 0 ? (<ul className={s.list}>
    {renderList.map((item) =>
      <li key={item.id} id={item.id} className={s.item}>
        <p className={s.name}>{item.name}</p><p className={s.number}>{item.number}</p>
        <DeleteButton onDeleteContact={onDeleteContact} id={item.id} />
      </li>
    )}
  </ul>) : (<p className={s.text}>no results</p>)
}

ContactList.propTypes = {
  renderList: propTypes.array
}

export default ContactList;
