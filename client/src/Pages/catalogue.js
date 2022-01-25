import ItemCatalogue from '../Components/itemCatalogue.js';
import MenuTri from '../Components/menuTri.js';
import Utilisateur from '../util/utilisateur';
import React, { Component }  from 'react';
function Catalogue(){
    return (
        <div className="Catalogue">
            <h1> Catalogue</h1>
            <MenuTri/>
            <div class="containerList">
            <ItemCatalogue/>
            </div>
        </div>
    );
}

export default Catalogue;


