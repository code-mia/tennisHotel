var localStorage = require('localStorage');
var Utilisateur = (function() {
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');

    var entreeCorrecte = function(){
      console.log('Marche')
      return Utilisateur.getUsername() == "admin" || Utilisateur.getUsername() == "gerant" || Utilisateur.getUsername() == "joueur" || Utilisateur.getUsername() == "arbitre";
    };
    var correctUser = function(){
      return localStorage.getItem('username') === JSON.stringify("admin") || localStorage.getItem('username') === JSON.stringify("gerant") || localStorage.getItem('username') === JSON.stringify("joueur") || localStorage.getItem('username') === JSON.stringify("arbitre");
    };
    var getUsername = function() {
      return username;    // Or pull this from cookie/localStorage
    };
  
    var setUsername = function(name) {
      username = name;     
      // Also set this in cookie/localStorage
    };
    var setPassword = function(pwd) {
      password = pwd;     
      // Also set this in cookie/localStorage
    };
    var saveData = function() {
      localStorage.setItem('username',JSON.stringify(username));
      localStorage.setItem('password', JSON.stringify(password));
    }
    var getPassword = function() {
      return password;    // Or pull this from cookie/localStorage
    };
    var isArbitre = function() {
      return localStorage.getItem("username") === JSON.stringify("arbitre")
    }
    var isAdmin = function() {
      return localStorage.getItem('username') === JSON.stringify("admin")
    }
    var isJoueur = function() {
      return localStorage.getItem('username') === JSON.stringify("joueur")
    }
    var isGerant = function() {
      return localStorage.getItem('username') === JSON.stringify("gerant")
    }
    var Deconnexion =function() {
      console.log('blub');
    }
    return {
      getUsername: getUsername,
      setUsername: setUsername,
      setPassword:setPassword,
      getPassword:getPassword,
      correctUser:correctUser,
      saveData:saveData,
      isArbitre:isArbitre,
      isAdmin:isAdmin,
      isJoueur:isJoueur,
      isGerant:isGerant,
      entreeCorrecte:entreeCorrecte
    }
  
  })();
  
  export default Utilisateur;


