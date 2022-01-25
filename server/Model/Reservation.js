const db = require("../config/db");
class Reservation {
    constructor(idhebergement,nbrpersonne,datedebut,datefin,nom,vip){
        
        this.idhebergement = idhebergement;

        this.nbrpersonne = nbrpersonne;
        
        this.datedebut = datedebut;
        
        this.datefin = datefin;
        
        this.nom = nom; //le nom du vip (nom de famille)
        

        this.vip = vip; //sert à obtenir l'user à partir du localstorage (username ou email si on avait eu le temps de faire l'inscription)
    }

    async save() {
        
        let sql = `INSERT INTO reservationhebergement(idhebergement,nbrpersonne,datedebut,datefin,nom,vip) VALUES (${this.idhebergement},${this.nbrpersonne},${this.datedebut},${this.datefin},${this.nom},${this.vip})`;
        return db.execute(sql);
    }
    static delete(id) {
        
        let sql = `DELETE FROM reservationhebergement WHERE idreservation=${id}`;
        return db.execute(sql);
    }
    static valider(id) {
        
        let sql = `UPDATE reservationhebergement SET valide=1 WHERE idreservation=${id}`;
        return db.execute(sql);
    }
    static findAll() {
        let sql = `SELECT * FROM reservationhebergement ORDER BY idreservation DESC `;
        return db.execute(sql);

        
    }
    static findAllByVip(vip) {
        let sql = `SELECT * FROM reservationhebergement WHERE valide = 1 & vip=${vip} ORDER BY idreservation DESC `;
        return db.execute(sql);

    }
    static findAllNotValid() {
        let sql = "SELECT * FROM reservationhebergement WHERE valide = 0 ORDER BY idreservation DESC ";
        return db.execute(sql);

    }
    static findById(id) {
        let sql = `SELECT * FROM reservationhebergement WHERE idreservation = ${id}`;
        return db.execute(sql);
    }
}

module.exports = Reservation;