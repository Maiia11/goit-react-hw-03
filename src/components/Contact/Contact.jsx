import css from './Contact.module.css'

const Contact = ({name, number, id, onDelete,}) => {
  return (
    <div className={css.container}>
      <div>
        <h2 className={css.text} >{name}</h2>
        <p className={css.text}>{number}</p>
        </div> 
          <button type="button" onClick={()=> onDelete(id)}> Delete </button>
     </div>
    
  )
}

export default Contact