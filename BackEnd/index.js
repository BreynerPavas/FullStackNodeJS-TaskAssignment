const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Configurar CORS
app.use(cors({
  origin: "http://localhost:5173", // Reemplaza con la URL de tu frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Headers permitidos
  credentials: true // Permitir cookies si las usas
}));

// Middleware
app.use(express.json());

// Rutas
app.use("/superheroes", require("./routes/superHero"));

// Creación de base de datos y tablas
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE humblesuperheroapi;";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Database created...");
    });
});

app.get("/createSuperheroTable", (req, res) => {
    let sql =
      "CREATE TABLE humblesuperheroapi.superhero(id INT AUTO_INCREMENT,name VARCHAR(50),superpower VARCHAR(50), humility_score INT ,PRIMARY KEY(id));";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Superhero table created...");
    });
});

// Iniciar servidor solo si es el script principal
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`);
  });
}

module.exports = app;
