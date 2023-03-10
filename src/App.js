
import './App.css';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import Footer from './Components/Footer';



import {   useState } from 'react';

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

     
     

     
      
    
   
      {galleryStage === "start" && <Header startGallery={startGallery} />}
      {galleryStage === "end" && <Gallery retry={retry} />} 
     
     
    <Footer/>
    </div>
  );
}

export default App;
