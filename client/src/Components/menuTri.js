import React, { Component }  from 'react';
const MenuTri = () => (
<div class="menuTri">
    <div><h2>Localisation</h2> <img src={process.env.PUBLIC_URL + "/images/arrow.png"} ></img></div>
    <div><h2>Etoiles</h2>  <img src={process.env.PUBLIC_URL + "/images/arrow.png"} ></img></div>
    <div><h2>Capacité</h2>  <img src={process.env.PUBLIC_URL + "/images/arrow.png"} ></img></div>
    <div><h2>Services</h2>  <img src={process.env.PUBLIC_URL + "/images/arrow.png"} ></img></div>
</div>
);


export default MenuTri;
