import './Gallery.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export default function StandardImageList() {
 
    return (
      <div className='List'>
      
      <ImageList sx={{  }} cols={4} rowHeight={404}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </div>
    );
  }

  const itemData = [
    {
      img: 'https://i.pinimg.com/564x/ac/a3/8f/aca38f40c1dff74da67d9193599fc385.jpg',
      title: 'Remember-the-titas',
    },
    {
      img: 'https://i.pinimg.com/564x/d7/23/79/d72379d9138819bdc4239eb022ee32c4.jpg',
      title: 'labirinty',
    },
    {
      img: 'https://i.pinimg.com/564x/57/4a/e5/574ae5955f29a894887dcde394daf37c.jpg',
      title: 'Eduard-mão-de-tesoura',
    },
    {
      img: 'https://i.pinimg.com/564x/19/51/d0/1951d00c36a194a40ad9a77b82ca1169.jpg',
      title: 'historia-sem fim',
    },
    {
      img: 'https://i.pinimg.com/564x/7c/45/da/7c45da379d513c3e97953939e5f1d4a6.jpg',
      title: 'karate-kid',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];


