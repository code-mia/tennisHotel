import Header from './Components/header.js';
import Catalogue from './Pages/catalogue.js';
import Hebergement from './Pages/hebergement.js';
import Index from './Pages/index.js';
import Proposer from './Pages/proposer.js';
import Connexion from './Pages/connexion.js';
import Recherche from './Pages/recherche.js';
import Inscription from './Pages/inscription.js';
import Erreur from './Pages/erreur.js';
import Reserver from './Pages/reserver.js';
import {BrowserRouter,Routes,Route, Router,HashRouter} from "react-router-dom";
import ValiderHebergement from './Pages/validerHebergement.js';
import ValidationReservation from './Pages/validerReservation.js';
import MesReservations from './Pages/mesReservations.js';
import MesHebergements from './Pages/mesHebergements.js';
import MettreAJour from './Pages/mettreAJour.js';
export default function App() {
  
  return (
      <div>
      
      <Header/> 
      <HashRouter>
        <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/catalogue" element={<Catalogue/>} />
        <Route path="/hebergement/:id" element={<Hebergement/>} />
        <Route path="/reserver/:id" element={<Reserver/>} />
        <Route path="/proposer" element={<Proposer/>} />
        <Route path="/connexion" element={<Connexion/>} />
        <Route path="/profil" element={<Connexion/>} />
        <Route path="/recherche" element={<Recherche/>} />
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/erreur" element={<Erreur/>} />
        <Route path="/validationHebergement" element={<ValiderHebergement/>} />
        <Route path="/validationReservation" element={<ValidationReservation/>} />
        <Route path="/mesReservations" element={<MesReservations/>} />
        <Route path="/mesHebergements" element={<MesHebergements/>} />
        <Route path="/mettreAJour/:id" element={<MettreAJour/>} />
        </Routes>
      </HashRouter>
      </div>
    )
};