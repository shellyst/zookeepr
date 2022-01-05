const router = require("express").Router();
const animalRoutes = require("../apiRoutes/animalRoutes");
const zookeeperRoutes = require("../apiRoutes/zookeeperRoutes");

router.use(animalRoutes);

router.use(zookeeperRoutes);

module.exports = router;

//using module exported from animalRoutes
//using animalRoutes/index.js as central hub for routing functions

//added this code so that later when we add additional routes, they can all be exported from the same file
