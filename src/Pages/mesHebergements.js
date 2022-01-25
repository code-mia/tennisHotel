import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import API from '../api/api.js';
import Utilisateur from '../util/utilisateur';
var localStorage = require('localStorage');
function Index(){
    const [hebergements, setHebergement ] = useState([]);
    console.log(Utilisateur.getUsername());
    useEffect(() => {
        API.get(`/hebergement/`).then(resp => {
            setHebergement(resp.data.hebergements[0]);
            console.log(hebergements);
        }).catch((error) => {
            console.error(error)
        });
    },[]);

    
    return(
    
    <div className="index">
    <h1> Mes hébergements</h1>
    <div class="containerList">
    <>
    {hebergements.map((hebergement) => (
        <div key={hebergement.idhebergement} className="Item">
        <img src="./images/hotel1.jpg"></img>
        <h2>{hebergement.nom}</h2>
        <form action="hebergement" method="get">
        <Link class="Button" to={`/mettreAJour/${hebergement.idhebergement}`}> Mettre à jour </Link>
        </form>
        </div>
    
    ))}
    </>
    </div>
    
    </div>
    )
}

export default Index;

