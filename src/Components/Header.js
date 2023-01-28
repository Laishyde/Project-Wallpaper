import './Header.css';
import Gif from '../assets/imagens/menina.gif';
import Balon from '../assets/imagens/balao.png';


const Header = ({ startGallery }) => {
  return (
    <div className='Interface'>

     
       
     
        <div>
        <img className='girl' src={Gif} alt="menina" />
        </div>
        <div className='item'>
        <img className='balon' src={Balon} alt="Balon" />
        <button onClick={startGallery} className="button">Gallery</button>
        </div>

      
      


    </div>
  )
}

export default Header