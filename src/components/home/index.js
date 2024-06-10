import React, { useState, useEffect } from 'react'

import "./index.css"

import { Link } from 'react-router-dom';

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

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people");
        const data = await response.json();
        setData(data.results);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching characters:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);


  
    return(
      <div className='app-container'>
          <h1 className='head'>Star Wars Characters</h1>
          {loading ? (
        <div className='load'>Loading...</div>
      ) : (
          <ul className='char-container'>
            {data.map(eachChar=>(
              <li className='char' key={eachChar.name}>
                <Link className='Link' to={{
                pathname: `/character/${encodeURIComponent(eachChar.name)}`,
                state: { eachChar } 
              }}>
                {charUrl.map(eachUrl => (
              eachChar.name === eachUrl.name && (
                <img className='char-img' alt={eachChar.name} src={eachUrl.url} key={eachUrl.url} />
              )
            ))}
                <p className='name'>{eachChar.name}</p>
                </Link>
              </li>
            ))}
          </ul>
      )}
      </div>
    )
  }

export default Home