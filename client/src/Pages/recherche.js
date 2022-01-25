import Item from '../Components/itemCatalogue.js';
import MenuTri from '../Components/menuTri.js';
import {useParams} from "react-router-dom";
import queryString from 'query-string';
import React, { useState, useEffect} from 'react';
import API from '../api/api.js';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";

function Recherche(){
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let word = useQuery();
    word = JSON.stringify(word.toString().slice(7,word.length))

    const [hebergements, setHebergement ] = useState([]);
    // useEffect(() => {
    //     console.log(word)
    //     API.get(`hebergement/recherche`, { 
    //         word: word
    //     }).then(resp => {
    //         setHebergement(resp.data.hebergements[0]);
    //         console.log(hebergements);
    //     }).catch((error) => {
    //         console.error(error)
    //     });
    // },[]);

    return (
        <div className="Recherche">
            <h1> Résultats pour "{word}"</h1>
            <MenuTri/>
            <div class="containerList">
                
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
            
            </div>
        </div>
    );
}

export default Recherche;


