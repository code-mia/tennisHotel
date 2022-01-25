
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import API from '../api/api.js';

function MesReservations(){
    const [hebergements, setHebergement ] = useState([]);

    useEffect(() => {
        API.get(`/validerHebergement`).then(resp => {
            setHebergement(resp.data.hebergements[0]);
            console.log(hebergements);
        }).catch((error) => {
            console.error(error)
        });
    },[]);

    
    return(
    <>
    <h1>Mes réservations</h1>
    {hebergements.map((hebergement) => (
        <div key={hebergement.idhebergement} className="Item">
        <img src="./images/hotel1.jpg"></img>
        <h2>{hebergement.nom}</h2>
        <form action="hebergement" method="get">
        <div class="Button"><Link to={`/informationsHebergement/${hebergement.idhebergement}`}> Voir les informations </Link></div>
        </form>
        </div>
    
    ))}
    </>
    
    )
}

export default MesReservations;


