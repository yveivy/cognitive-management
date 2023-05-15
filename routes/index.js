const router = require('express').Router();

const notesRoutes = require("./noteRoutes");
const htmlRoutes = require ("./htmlRoutes");

router.use('/notes', notesRoutes);
router.use('/', htmlRoutes);

module.exports = router;
