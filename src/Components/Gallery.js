import './Gallery.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export default function StandardImageList({retry}) {
 
    return (
      <div className='btn'>
        <h2>Olá de novo</h2>
        <button id='day' onClick={retry}>voltar</button>
 
      <div className='List'>
        <ImageList className='Picture'rowHeight={320} width={900}  cols={4}>
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
      img: 'https://i.pinimg.com/236x/f5/2e/89/f52e899b7ec335d416487932ade0de6c.jpg',
      title: 'Fantasmas se divertem',
    },
    {
      img: 'https://www.unimado.pt/images/covers/sozinho-em-casa.webp',
      title: 'Esqueceram de mim',
    },
    {
      img: 'https://br.web.img3.acsta.net/medias/nmedia/18/91/31/26/20139277.jpg',
      title: 'Free willy',
    },
    {
      img: 'https://i.pinimg.com/564x/37/77/62/377762f19b9132c064154aec92fe0dca.jpg',
      title: 'cantando na chuva',
    },
    {
      img: 'https://i.pinimg.com/564x/ef/33/d3/ef33d32fc056913d9fbf0dc23355913f.jpg',
      title: 'Jumanji',
    },
    {
      img: 'https://i.pinimg.com/564x/04/3d/43/043d43b721d220faf2edbd6a3635cc35.jpg',
      title: 'O mascara',
    },
    {
      img: 'https://i.pinimg.com/564x/17/2a/6e/172a6ee5de0509a572c80bcb397d0ebf.jpg',
      title: 'Uma noite no museu',
    },
  ];


