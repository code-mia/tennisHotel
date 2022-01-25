import React, { useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import API from '../api/api.js';
import { Link } from 'react-router-dom';
import Utilisateur from '../util/utilisateur';
function Hebergement ( ) {
    const [hebergement, setHebergement ] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        API.get(`/hebergement/${id}`).then(resp => {
            setHebergement(resp.data.hebergement[0]);
        }).catch((error) => {
            console.error(error)
        });
    },[]);
    
    return (
        
        <div className="container">
                <div className="hebergement" class="containerFiche">
                <div class="leftFiche">
                 <h1>{hebergement.nom}</h1>
                 <h2>{hebergement.localisation}</h2>
                 <img src={process.env.PUBLIC_URL + "/images/hotel1.jpg"} class="logo"></img>
                 <div>{hebergement.nombreEtoiles}</div>
                 <h2>Description</h2>
                 <div class="Descr"> {hebergement.description}</div>
                 </div>
                 <div class="rightFiche">
                     
                 <h2>Caractéristiques</h2>
                 <div class="Caract">
                 <div>Capacité totale : {hebergement.capacite}</div>
                 <div>Services proposés : {hebergement.services}</div>  
                 </div>  
                <Link class="Reserver" to={`/reserver/${hebergement.idhebergement}`}> Réserver </Link>
                
                </div>
                </div>

        </div>
    );   
    
}

export default Hebergement;

