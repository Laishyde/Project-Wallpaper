
import './App.css';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import PageSecond from './Components/PageSecond';
import { useCallback, useEffect, useState } from 'react';

const stages = [
  { id: 0, name: "start" },
  { id: 1, name: "gallery" },
  { id: 2, name: "end" },
]




function App() {
  const [galleryStage, setGalleryStage] = useState(stages[0].name);

  const startGallery = () => {
    setGalleryStage(stages[2].name)

  }
  const retry = () => {
    setGalleryStage(stages[0].name);
  }






  return (

    
    <div className="App">

      <div className='NavBar'>
      <ul className='list'>
        <li>Categoria</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
       
      
      </div> 

      <h1>ola mundo</h1>
      

      {galleryStage === "gallery" && <PageSecond />}
      {galleryStage === "start" && <Header startGallery={startGallery} />}
      {galleryStage === "end" && <Gallery retry={retry} />} 
     
     
   
    </div>
  );
}

export default App;
