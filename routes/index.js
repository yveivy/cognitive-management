const router = require('express').Router();

const noteRoutes = require("./noteRoutes");
const htmlRoutes = require ("./htmlRoutes");

router.use('/notes', noteRoutes);
router.use('/', htmlRoutes);

module.exports = router;
