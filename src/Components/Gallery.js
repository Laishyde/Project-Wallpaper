import './Gallery.css'
import ImageFilter from './ImageFilter';
import Gif from '../assets/imagens/goku.gif'




export default function StandardImageList({ retry }) {
 
  return (
      <div className="container">
        <div className="orange"></div>
          <img className='japan' src={Gif} alt="Goku" />
          <div>
        <ImageFilter />
      <button id='day' onClick={retry}>voltar</button> 
        </div>
      
  
    </div>
  );
}

