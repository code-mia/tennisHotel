
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import API from '../api/api.js';

function ValiderHebergement(){
    const [hebergements, setHebergement ] = useState([]);

    useEffect(() => {
        API.get(`/hebergement/valider`).then(resp => {
            setHebergement(resp.data.hebergements[0]);
            console.log(hebergements);
        }).catch((error) => {
            console.error(error)
        });
    },[]);
    function valider(e) {
        e.preventDefault();
        console.log(e.target.id)
        API.post("/hebergement/valider", {
            idhebergement: parseInt(e.target.id)
        }).then(res => {
            console.log(res.data)
            
        }).catch(err => {
            console.log(err)
        })
        window.location.reload(false);
    }

    function supprimer(e) {
        e.preventDefault();
        API.post("/hebergement/supprimer", {
            idhebergement: parseInt(e.target.id)
        }).then(res => {
            console.log(res.data)
            
        }).catch(err => {
            console.log(err)
        })
        window.location.reload(false);
    }
    
    return(
    <>
    <h1>Hebergements à valider</h1>
    <div class="containerList">
    {hebergements.map((hebergement) => (
        <div key={hebergement.idhebergement} className="Item">
        <img src={process.env.PUBLIC_URL + "/images/Hotel1.jpg"}></img>
        <div>
        <h2>Nom de l'hotel : {hebergement.nom}</h2>
        <h2>Localisation : {hebergement.localisation}</h2>
        <h2>Etoiles : {hebergement.nombreEtoiles}</h2>
        <h2>Capcité : {hebergement.capacite}</h2>
        <h2> Services : {hebergement.services}</h2>
        <h2>Description : {hebergement.description}</h2>
        </div>
        <form action="hebergement" method="get">
        <div class="containerList"><div class="Button" id={hebergement.idhebergement} onClick={e => valider(e)}> Valider </div>
        <div class="Button" id={hebergement.idhebergement} onClick={e => supprimer(e)}>Supprimer </div></div>
        </form>
        </div>
    
    ))}
    </div>
    </>
    
    )
}

export default ValiderHebergement;


