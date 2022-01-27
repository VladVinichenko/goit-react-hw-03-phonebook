import s from './ContactForm.module.css'
import Input from '../Input/Input';
import Button from '../Button/Button'

const ContactForm = ({ onAddContact, onInputName, onInputTel }) => {
  return (
    <form className={s.boxForm} >
      <Input name="name" inputData={onInputName}>Name</Input>
      <Input name="number" tel='true' inputData={onInputTel}>Number</Input>
      <Button name='addContact' action={onAddContact}>Add contact</Button>
    </form >


  )
}

export default ContactForm;
