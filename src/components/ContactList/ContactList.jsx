import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

const ContactList = ({contact, onDelete}) => {
  return (
      <ul className={css.container}>
          {contact.map(({ id, name, number }) => (
            <li key={id}>
              <Contact name={name} number={number} onDelete={onDelete} id={id} />
            
          </li>) )}
    </ul>
  )
}

export default ContactList