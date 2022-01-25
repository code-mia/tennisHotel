import React, { useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import API from '../api/api.js';
import { Link } from 'react-router-dom';
import Utilisateur from '../util/utilisateur';
function Hebergement ( ) {
    const [data, setData] = useState("");
    const [hebergement, setHebergement ] = useState([]);
    const { id } = useParams();
    function valider(e) {
        e.preventDefault();
        console.log(e.target.id)
        API.post(`/hebergement/${id}`, {
            capacite: parseInt(data)
        }).then(res => {
            console.log(res.data)
            
        }).catch(err => {
            console.log(err)
        })
        
    }
    function handle(e) {
        setData(e.target.value)
    }
    
    return (
        
        <div className="Proposer"  >
            <div id="affichagePage">
            <h1>Mettre à jour la capacité</h1>
            <form class= "window">
            <label>Capacite actuelle :</label>
                <input onChange={(e) => handle(e)} value={data} type="number" />
            
            <div class="submit" >
                <Link class="Button"to="/" onClick={(e)=> valider(e)}> Envoyer </Link>
                <Link class="Button"to="/">Annuler</Link>
                
            </div>
            </form>
            </div>
        </div>
    );   
    
}

export default Hebergement;

