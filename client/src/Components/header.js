import SearchBar from './searchbar.js';
import Utilisateur from '../util/utilisateur';
import React, { useState, useEffect} from 'react';
var localStorage = require('localStorage');
const Header = () => {
    const [coLink,setcoLink] = useState("");
    const ouvrirMenu = () => {
        var menu = document.getElementById("menuUser");
        if(menu.style.display == "block") {
            menu.style.display = "none";
          }
          else {
            menu.style.display = "block";
          }
    }
    const clear = () => {
        localStorage.setItem('username', "")
        localStorage.setItem('password',"")
    }
    const affichageUser = () => {
        let string = ""
        if (Utilisateur.correctUser()) {
            if (Utilisateur.isAdmin()) {
                string += `<li><a href='/validationHebergement'>Valider Hebergements</a></li>`
                string += `<li><a href='/validationReservation'>Valider Reservation</a></li>`
            }
            else if (Utilisateur.isArbitre() ||Utilisateur.isJoueur()) {
                string += `<li><a href='/mesReservations'>Mes Reservations</a></li>`
            }
            else if (Utilisateur.isGerant()) {
                string += `<li><a href='/mesHebergements'>Mes hebergements</a></li>`
            }
            string += `<li><a id='deconnexion' href='/'>Deconnexion</a></li>`
            console.log(Utilisateur.isAdmin());
            document.getElementById('list').innerHTML = string
            document.getElementById("deconnexion").onclick = clear
            document.getElementById("iconCo").onclick = ouvrirMenu
            setcoLink("#")
        }
        else {
            setcoLink("/connexion")
        }
    }
    return (
    <div class="header" onLoad={affichageUser}>
        <div class="side">
        <a href="/proposer"><p>Proposer Un Hébergement</p></a>
        <a href="/catalogue"><p>Catalogue</p></a>
        </div>
        <a href="/"><img src={process.env.PUBLIC_URL + "/images/tennishotellogo.png"} class="logo"></img></a>
        <div class="side">
        <SearchBar/>
        <div id="user">
        <a id="iconCo" href={coLink}><img src={process.env.PUBLIC_URL + '/images/acc.png'}></img></a>
        
        <div id="menuUser"> <ul id= "list"><li>blab</li><li>blab</li><li>blab</li></ul></div>
        </div>
        </div>
        
    </div>
    )
};


export default Header;
