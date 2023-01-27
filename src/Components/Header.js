import './Header.css';
import Gif from '../assets/imagens/menina.gif';
import Balon from '../assets/imagens/balao.png';


const Header = ({startGallery}) => {
  return (
    <div className='Interface'>
      <h2>Olá</h2>
      <div className='hello'> 
      <button onClick={startGallery} className="button">Gallery</button>
      </div>
    

        <div className='btn'>
          <img className='girl'  src={Gif} alt="menina" />
        <img className='balon' src={Balon} alt="Balon" />
     
      </div>
   
         
         
    </div>
  )
}

export default Header