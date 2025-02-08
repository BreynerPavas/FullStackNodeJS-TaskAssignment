const db = require("../config/database")

let superHeroes = [];
// Crea un endpoint para crear una categoría y añade 2 categorías nuevas desde el postman
const SuperHeroController = {
    create(req, res) {
        const { name, superpower, humility_score } = req.body;
    
        // Validación de datos
        if (!name || !superpower || humility_score == null) {
            return res.status(400).json({ error: "You must fill all the fields" });
        }
        if(humility_score < 1 || humility_score > 10){
            return res.status(400).json({error:"Humility score must be between 1 to 10"})
        }
    
        let sql = `INSERT INTO humblesuperheroapi.superhero (name, superpower, humility_score) VALUES (?, ?, ?)`;
        let values = [name, superpower, humility_score];
    
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error("Error al insertar en la tabla:", err);
                return res.status(500).json({ error: "Error al agregar el superhéroe." });
            }
            console.log(result);
            res.status(201).json({ message: "Superhero added successfully!", id: result.insertId });
        });
    },
    
    showAll(req,res){
        let sql = `SELECT * FROM humblesuperheroapi.superhero ORDER BY humility_score DESC`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          superHeroes = result;
          res.send(result);
        });
    },
    delete(req, res) {
        const { id } = req.params;
    
        if (!id || isNaN(id)) {
            return res.status(400).json({ error: "Invalid ID" });
        }
    
        let sql = `DELETE FROM humblesuperheroapi.superhero WHERE id = ?`;
    
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error("Error deleting superhero:", err);
                return res.status(500).json({ error: "Database error" });
            }
    
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: "Superhero not found" });
            }
    
            res.json({ message: "Superhero deleted successfully" });
        });
    }
    
    
    
    
}
module.exports = SuperHeroController;