import { ThemeContext } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput'
import "./ImageFilter.css"

const ImageFilter = () => {
    const [info, setInfo] = useState({});
    const [text, setText] = useState ("");
    useEffect(()=>{
        if(text){
            fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=12`)
            .then((response)=> response.json())
                .then((response) => {
                    setInfo(response);

                   
                })
           
            
        }

    }, [text]);
  return (
    <div className='List'>
       
        <SearchInput value={text} onChange={(search)=>setText(search)}/>
          {info.data && (
           
             <ul className='animes-list'>
                  {info.data.map((anime) => (
                      <li key={anime.id}>
                        
                          <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle}  />
                      
                    
                     {anime.attributes.canonicalTitle}
                      </li>

                  ))}
            
              </ul>
          )} 
       
    </div>
  )
}

export default ImageFilter;