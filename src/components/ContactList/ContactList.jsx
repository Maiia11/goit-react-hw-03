import Contact from "../Contact/Contact"

const list = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

const ContactList = () => {

  return (
      <div>
          {list.map(({ id, name, number }) => {
              return(
              <>
                  <Contact key={id} name={name} number={number} />
            </>)
          } )}
    </div>
  )
}

export default ContactList