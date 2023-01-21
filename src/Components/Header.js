import './Header.css';

const Header = ({startGallery}) => {
  return (
    <div>
        <h2>Olá</h2>
          <button onClick={startGallery} className="button">Gallery</button>
    </div>
  )
}

export default Header