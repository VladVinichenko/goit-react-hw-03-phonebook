import s from './Filter.module.css'
import Input from '../Input/Input'

const Filter = ({ onInputFilter }) => {
  return (
    // <h3>Find contacts by name</h3>
    <Input name="filter" inputData={onInputFilter}>Find contacts by name</Input>
  )
}
export default Filter;
