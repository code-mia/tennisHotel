import Utilisateur from '../util/utilisateur';
function Connexion(){
    function submit(e) {
        
        if (Utilisateur.entreeCorrecte()) {
            console.log(Utilisateur.getPassword());
            console.log(Utilisateur.getUsername());
        }
        else {
            
            Utilisateur.setPassword("")
            Utilisateur.setUsername("")
            document.getElementById('erreur').innerHTML = "Incorrecte"
        }
        Utilisateur.saveData()
        this.props.history.push('/')
        e.preventDefault();
    }
    function onChangePwd(e) {
        Utilisateur.setPassword(e.target.value);

    }
    function onChangeUsername(e) {
        Utilisateur.setUsername(e.target.value)
        

    }
    return (
        <div className="Connexion">
        <h1> Connexion</h1>
        <form class="connexion" action ="/"onSubmit={(e)=> submit(e)}>
        <input type="text" onChange={(e)=>onChangeUsername(e)}></input>
        <input type="password" onChange={(e)=>onChangePwd(e)}></input>
        <h4 id="erreur"></h4>
        <button type="submit" class="Button">Se connecter</button>
        </form>
        {/* <form action="inscription" methode="none">
        <button>Inscription</button> */}
        </div>
    );
}

export default Connexion;


