const router = require("express").Router();

router.get("/basico", (req, res, next) => res.render("maps/maps"));

module.exports = router;
