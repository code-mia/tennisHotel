const db = require("../config/db");
class Hebergement {
    constructor(nom,localisation,nombreEtoiles,capacite,services,description,valide){
        
        this.nom = nom;
        
        this.localisation = localisation;
        
        this.nombreEtoiles = nombreEtoiles;
        
        this.capacite = capacite;

        this.services = services;

        this.description = description;

        this.valide = valide;
    }

    async save() {
        
        let sql = `INSERT INTO hebergement(nom, localisation, nombreEtoiles, capacite, services,description) VALUES (${this.nom},${this.localisation},${this.nombreEtoiles},${this.capacite},${this.services},${this.description})`;
        return db.execute(sql);
    }
    static delete(id) {
        
        let sql = `DELETE FROM hebergement WHERE idhebergement=${id}`;
        return db.execute(sql);
    }
    static valider(id) {
        
        let sql = `UPDATE hebergement SET valide=1 WHERE idhebergement=${id}`;
        return db.execute(sql);
    }

    static majCapacite(id,capacite) {
        
        let sql = `UPDATE hebergement SET capacite=${capacite} WHERE idhebergement=${id}`;
        return db.execute(sql);
    }
    static findAll() {
        let sql = "SELECT * FROM hebergement WHERE valide = 1 ORDER BY idhebergement DESC ";
        return db.execute(sql);

    }
    static findAllNotValid() {
        let sql = "SELECT * FROM hebergement WHERE valide = 0 ORDER BY idhebergement DESC ";
        return db.execute(sql);

    }
    static findById(id) {
        let sql = `SELECT * FROM hebergement WHERE idhebergement = ${id}`;
        return db.execute(sql);
    }
    static research(word) {
        let sql =`SELECT * FROM hebergement WHERE nom LIKE ${word} OR localisation LIKE ${word}`
        return db.execute(sql);
    }
}

module.exports = Hebergement;