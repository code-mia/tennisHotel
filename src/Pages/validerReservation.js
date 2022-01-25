
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import API from '../api/api.js';

function ValiderReservation(){
    const [reservation, setReservation ] = useState([]);

    useEffect(() => {
        API.get(`/reservation`).then(resp => {
            setReservation(resp.data.reservations[0]);
            
        }).catch((error) => {
            console.error(error)
        });
    },[]);
    function valider(e) {
        e.preventDefault();
        console.log(e.target.id)
        API.post("/reservation/valider", {
            idreservation: parseInt(e.target.id)
        }).then(res => {
            console.log(res.data)
            
        }).catch(err => {
            console.log(err)
        })
        window.location.reload(false);
    }

    function supprimer(e) {
        e.preventDefault();
        API.get(`/reservation/supprimer/${e.target.id}`).then(res => {
            console.log(res.data)
            
        }).catch(err => {
            console.log(err)
        })
        window.location.reload(false);
    }

    return(
    <div className="validerReservation">
    <h1>Reservations à valider</h1>
    <div class="containerList">
    {reservation.map((reservation) => (
        <div key={reservation.idreservation} className="Item">
        <Link class="Button" to={`/hebergement/${reservation.idhebergement}`}>Voir l'hebergement</Link>
        <h2>{reservation.datedebut}</h2>
        <h2>{reservation.datefin}</h2>
        <h2>{reservation.nom}</h2>
        <h2>{reservation.vip}</h2>
        <form action="hebergement" method="get">
        <div class="containerList"><div class="Button" id={reservation.idreservation} onClick={e => valider(e)}> Valider </div>
        <div class="Button" id={reservation.idreservation} onClick={e => supprimer(e)}>Supprimer </div></div>
        </form>
        </div>
    
    ))}
    </div>
    </div>
    )
}

export default ValiderReservation;


