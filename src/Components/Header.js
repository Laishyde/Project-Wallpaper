import './Header.css';
import Image from './../assets/imagens/classicos-sessao-da-tarde.png'

const Header = ({startGallery}) => {
  return (
    <div className='Interface'>
        <h2>Olá</h2>
        <div className='btn'>
      <button onClick={startGallery} className="button">Gallery</button>
      </div>
      <img src={Image} alt="" />
         
         
    </div>
  )
}

export default Header