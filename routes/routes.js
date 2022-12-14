var router = require("express").router();
var noteRoutes = require("./noteRoutes");

router.use(noteRoutes);
module.exports = router;