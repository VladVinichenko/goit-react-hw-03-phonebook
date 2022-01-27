import s from './Input.module.css'
import { Fragment } from 'react/cjs/react.production.min';
import propTypes from 'prop-types';

const Input = ({ name, children, inputData, tel }) => {
  return (
    <Fragment>
      <p className={s.name}>{children}</p>

      {!tel ? <input className={s.input}
        onChange={inputData}
        name={name}
        type="text"
        required
      /> : <input className={s.input}
        onChange={inputData}
        name={name}
        type="tel"
        pattern="\+?\d{1, 4}?[-.\s]?\(?\d{1, 3}?\)?[-.\s]?\d{1, 4}[-.\s]?\d{1, 4}[-.\s]?\d{1, 9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />}
    </Fragment>
  )
}

Input.propTypes = {
  name: propTypes.string.isRequired
}

export default Input;
