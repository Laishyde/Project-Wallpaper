import "./SearchInput.css";
import React from 'react'


const SearchInput = ({value, onChange}) => {
    function handleChange(event){
        onChange(event.target.value);
    }




  return (
    <div className='color'>
        <h1>Lista de Animes</h1>
      
        <input type="search" value={value} onChange={handleChange} />
      

    </div>
  )
};

export default SearchInput