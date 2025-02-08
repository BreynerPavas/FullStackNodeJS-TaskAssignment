const express = require("express");
const SuperHeroControllerController = require("../controllers/superHeroController");
const router = express.Router();

router.post("/superheroes", SuperHeroControllerController.create);
router.get("/superheroes",SuperHeroControllerController.showAll);
router.delete("/superheroes/:id",SuperHeroControllerController.delete);

module.exports = router;
