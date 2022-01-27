import s from './Button.module.css'

const Button = ({ name, action, children }) => {
  return (
    <button className={s.button} name={name} onClick={action}>{children}</button >
  )
}

export default Button;
