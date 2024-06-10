import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

import { FaLongArrowAltLeft } from "react-icons/fa";

const charUrl = [
  {
    name:'Luke Skywalker',
    url:'https://res.cloudinary.com/dwwunc51b/image/upload/v1717999132/Luke_Skywalker_adpbgm.webp'
  },
  {
    name:'C-3PO',
    url:'https://res.cloudinary.com/dwwunc51b/image/upload/v1717999131/C-3PO_najiad.jpg'
  },
  {
    name:'R2-D2',
    url:'https://res.cloudinary.com/dwwunc51b/image/upload/v1717999130/R2-D2_bzmci5.jpg'
  },
  {
    name:'Darth Vader',
    url:'https://res.cloudinary.com/dwwunc51b/image/upload/v1717999131/Darth_Vader_zy0bxk.jpg'
  },
  {
    name:'Leia Organa',
    url:'https://res.cloudinary.com/dwwunc51b/image/upload/v1717999130/Leia_Organa_dgvkcx.jpg'
  },
  {
    name:'Owen Lars',
    url:'https://res.cloudinary.com/dwwunc51b/image/upload/v1717999130/Owen_Lars_c8zaap.jpg'
  },
  {
    name:'Beru Whitesun lars',
    url:'https://res.cloudinary.com/dwwunc51b/image/upload/v1717999129/Beru_WhiteSun_lars_ui9rxk.jpg'
  },
  {
    name:'R5-D4',
    url:'https://res.cloudinary.com/dwwunc51b/image/upload/v1717999131/R5-D4_vpuwx1.webp'
  },
  {
    name:'Biggs Darklighter',
    url:'https://res.cloudinary.com/dwwunc51b/image/upload/v1717999130/Biggs_Darklighter_wlxv6v.jpg'
  },
  {
    name:'Obi-Wan Kenobi',
    url:'https://res.cloudinary.com/dwwunc51b/image/upload/v1717999130/Obi-Wan_Kenobi_yc3sdu.jpg'
  },
]

const CharacterDetails = (props) => {

  const character = props.location.state.eachChar;
   const image = charUrl.find(char => char.name === character.name);

  console.log(character)

  if (!character) {
    return <div>Character not found.</div>;
  }

  return (
    <div className='container'>
      <div className='arrow-name'>
        <Link to="/characters" className='link'><FaLongArrowAltLeft className='icon' /></Link>
        <h1 className='head'>{character.name}</h1>
      </div>
      <div className='details'>
       
        <img className='img' src={image.url} alt={image.name} />
        <div className='p-con'>
        <p><strong>Height:</strong> {character.height} cm</p>
        <p><strong>Mass:</strong> {character.mass} kg</p>
        <p><strong>Hair Color:</strong> {character.hair_color}</p>
        <p><strong>Skin Color:</strong> {character.skin_color}</p>
        <p><strong>Eye Color:</strong> {character.eye_color}</p>
        <p><strong>Birth Year:</strong> {character.birth_year}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        </div>
      </div>
      
    </div>
  );
}

export default CharacterDetails;
