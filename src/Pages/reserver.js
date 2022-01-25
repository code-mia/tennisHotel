import React, { useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import API from '../api/api.js';
import Utilisateur from '../util/utilisateur';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
function Reserver ( ) {
    const [hebergement, setHebergement ] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        API.get(`/hebergement/${id}`).then(resp => {
            setHebergement(resp.data.hebergement[0]);
        }).catch((error) => {
            console.error(error)
        });
    },[]);
    const [data, setData] = useState({
        idhebergement: id,
        nbrpersonne: "",
        datedebut: "",
        datefin: "",
        nom: "",
        vip:localStorage.getItem('username')
    });
    function handle(e) {
        const newdata ={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    function submit(e) {
        e.preventDefault();
        console.log(data)
        API.post("/reservation", {
            idhebergement: parseInt(data.idhebergement),
            nbrpersonne:data.nbrpersonne,
            datedebut:JSON.stringify(data.datedebut),
            datefin:JSON.stringify(data.datefin),
            nom: JSON.stringify(data.nom),
            vip: data.vip
            
        }).then(res => {
            console.log(res.data)
           
        }).catch(err => {
            console.log(err)
        })
    }
    
    return (
        
        <div className="container">
            <h1>Reservation {hebergement.nom}</h1>
                <div class= "window" onSubmit>
                
                 
                 <input type="date" id="datedebut" onChange={(e) => handle(e)}></input> 
                 <input type="date" id="datefin" onChange={(e) => handle(e)}></input> 
                 <input type="number" id="nbrpersonne" onChange={(e) => handle(e)} max={hebergement.capacite} min="1"></input>
                 <input type="text" id="nom" onChange={(e) => handle(e)}></input>
                 <Link class="Button"to="/" onClick={(e)=> submit(e)}> Envoyer </Link>
                </div>

        </div>
    );   
    
}

export default Reserver;

