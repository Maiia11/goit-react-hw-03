import Contact from "../Contact/Contact"

const ContactList = ({contact, onDelete}) => {
  return (
      <ul>
          {contact.map(({ id, name, number }) => (
            <li key={id}>
              <Contact name={name} number={number} onDelete={onDelete} id={id} />
            
          </li>) )}
    </ul>
  )
}

export default ContactList