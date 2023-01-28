import "./SearchInput.css";
import React, { useState } from 'react'
import useDebounce from "./useDebounce";


const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debounsedChange = useDebounce(onChange, 500);


  function handleChange(event) {
    setDisplayValue(event.target.value);
    debounsedChange(event.target.value);

  }



  return (
    <div className='color'>
      <h1>Lista de Animes</h1>

      <input type="search" value={displayValue} onChange={handleChange} />
      


    </div>
  )
}

export default SearchInput