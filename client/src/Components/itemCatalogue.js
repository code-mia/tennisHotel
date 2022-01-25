import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import API from '../api/api.js';

const ItemCatalogue = () => {
    const [hebergements, setHebergement ] = useState([]);

    useEffect(() => {
        API.get(`/hebergement`).then(resp => {
            setHebergement(resp.data.hebergements[0]);
            console.log(hebergements);
        }).catch((error) => {
            console.error(error)
        });
    },[]);

    
    return(
        
    <>
    
    {hebergements.map((hebergement) => (
        <div key={hebergement.idhebergement} className="Item">
        <img src={process.env.PUBLIC_URL + `/images/Hotel1.jpg`}></img>
        <h2>{hebergement.nom}</h2>
        <form action="hebergement" method="get">
        <Link class="Button" to={`/hebergement/${hebergement.idhebergement}`}> En savoir plus </Link>
        </form>
        </div>
    
    ))}
    </>
    
    )
}


export default ItemCatalogue;