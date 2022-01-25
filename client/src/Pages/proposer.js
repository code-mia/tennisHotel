import React, { useState, useEffect} from 'react';

import API from '../api/api.js';
import Utilisateur from '../util/utilisateur';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";

function Proposer(){
    const [Services, setServices] = useState({
        Bar : false,
        Restaurant: false,
        PetitDejeuner : false,
        Sauna: false,
        SalleDeSport: false,
        Coiffeur : false,
        Pressing: false,
        Hammam: false
    });
    const [data, setData] = useState({
        nom : "",
        localisation : "",
        nombreEtoiles : "",
        capacite : "",
        services : "",
        description : ""
    });
    function handle(e) {
        const newdata ={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    const onChangeBar= () => {
        setServices(i => ({
            ...i,
            Bar: !i.Bar
        }));
      }
      const onChangeRestaurant= () => {
        setServices(i => ({
            ...i,
            Restaurant: !i.Restaurant
        }));
      }
      const onChangePetitDejeuner = () => {
        setServices(i => ({
            ...i,
            PetitDejeuner: !i.PetitDejeuner
        }));
      }
      const onChangeSauna = () => {
        setServices(i => ({
            ...i,
            Sauna: !i.Sauna
        }));
      }
      const onChangeSalleDeSport = () => {
        setServices(i => ({
            ...i,
            SalleDeSport: !i.SalleDeSport
        }));
      }
      const onChangeCoiffeur= () => {
        setServices(i => ({
            ...i,
            Coiffeur: !i.Coiffeur
        }));
      }
      const onChangePressing= () => {
        setServices(i => ({
            ...i,
            Pressing: !i.Pressing
        }));
      }
      const onChangeHammam= () => {
        setServices(i => ({
            ...i,
            Hammam: !i.Hammam
        }));
      }
      function verifUser(){
        
        }
        useEffect(() => {
            if(localStorage.getItem('username')==JSON.stringify('gerant')) {
                console.log("ok")
                
            }
            else {
              document.getElementById('affichagePage').innerHTML="<h1> Erreur</h1> <p>Veuillez vous connecter en tant que gérant</p>"
            }
        }, []); 
 
      
      Object.filter = (obj, predicate) => 
          Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );
          
        function submit(e) {
        e.preventDefault();
        API.post("/hebergement", {
            nom: JSON.stringify(data.nom),
            localisation:  JSON.stringify(data.localisation),
            nombreEtoiles:  parseInt(data.nombreEtoiles),
            capacite:  parseInt(data.capacite),
            services:  JSON.stringify(data.services),
            description:  JSON.stringify(data.description)
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
        document.getElementById('success').innerHTML = "La proposition a été prise en compte"
        }
      const Set = () => {
        const newdata ={...data}
        var services = Object.keys(Object.filter(Services, service => service == true));
        var length = services.length;  // find an array length
        var str = '';
        for(var i=0; i< length; i++){
        str += services[i];  // concat Array value to a string variable
        if(i < (length-1) ){
            str += ',';  // add separator
        }
        }
        newdata["services"] = str;
        setData(newdata);
        
      }
    return (
        <div className="Proposer" onLoad={verifUser()} >
            <div id="affichagePage">
            <h1>Proposez un hébergement</h1>
            <form class= "window">
            <h2>Fiche de l'hébergement</h2>
            <label>Nom de l'hotel:</label>
                <input onChange={(e) => handle(e)} id="nom" value={data.nom} type="text" />
            
            
            
            <label>Localisation :</label>
                <input onChange={(e) => handle(e)} id="localisation" value={data.localisation} type="text" />
            
            
            
            
            <label>Capacité :</label>
                <input onChange={(e) => handle(e)} id="capacite" value={data.capacite} type="number" min="1" max="5"/>
            
            
            
            
            <label>Services :</label>
            <div class="servicesList" onInput={Set}>
            <label><input type="checkbox" name="Bar" checked={Services.Bar} onChange={onChangeBar}/> Bar</label>
            <label><input type="checkbox" name="Restaurant" checked={Services.Restaurant} onChange={onChangeRestaurant}/> Restaurant</label>
            <label><input type="checkbox" name="PetitDejeuner" checked={Services.PetitDejeuner} onChange={onChangePetitDejeuner}/>Petit-déjeuner </label>
            <label><input type="checkbox" name="Sauna" checked={Services.Sauna} onChange={onChangeSauna}/> Sauna</label>
            <label><input type="checkbox" name="Sport" checked={Services.SalleDeSport} onChange={onChangeSalleDeSport}/> Salle de sport</label>
             <label><input type="checkbox" name="Coiffeur" checked={Services.Coiffeur} onChange={onChangeCoiffeur}/>Coiffeur </label>
             <label> <input type="checkbox" name="Pressing" checked={Services.Pressing} onChange={onChangePressing}/>Pressing</label>
             <label><input type="checkbox" name="Hammam" checked={Services.Hammam} onChange={onChangeHammam}/>Hammam</label>
             </div>
            <label>Etoiles :</label>
                <input onChange={(e) => handle(e)} max="5" id="nombreEtoiles" value={data.nombreEtoiles} type="number" />
                
            
            <input id="file" type="file" />
            <label for="file">Image :</label>
            
            <label>Description :</label>
                <textarea onChange={(e) => handle(e)} id="description" value={data.description} name="description">
                Veuillez rentrer 213 caractères maximum
                </textarea>
            <div id="success">
                
            </div>
            <div class="submit" >
                <Link class="Button"to="/" onClick={(e)=> submit(e)}> Envoyer </Link>
                <Link class="Button"to="/">Annuler</Link>
                
            </div>
            </form>
            </div>
        </div>
        
    );
}

export default Proposer;

