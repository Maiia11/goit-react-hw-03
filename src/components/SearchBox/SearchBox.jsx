import css from './SearchBox.module.css'

function SearchBox({value, onFilter}) {
  return (
    <div className={css.container}>
      <label htmlFor={value}>Find contacts by name</label>
      <input type="text" value={value} onChange={(e)=>onFilter(e.target.value)}/>
    </div>
  )
}

export default SearchBox