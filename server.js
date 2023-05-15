const express = require('express')
const path = require('path');
const app = express();

const PORT = 3001

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
//  **not sure if this is necessary

const notesRoutes = require("./routes/noteRoutes");
const htmlRoutes = require ("./routes/htmlRoutes");

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);