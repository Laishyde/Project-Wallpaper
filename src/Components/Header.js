import './Header.css';
import Image from './../assets/imagens/Gif.gif'


const Header = ({startGallery}) => {
  return (
    <div className='Interface'>
        <h2>Olá</h2>
      <button onClick={startGallery} className="button">Gallery</button>
        <div className='btn'>
     
        <img className='teste' src={Image} alt="" />
      </div>
   
         
         
    </div>
  )
}

export default Header