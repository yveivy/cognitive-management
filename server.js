const express = require('express')
const path = require('path');
const api = require('./routes/index.js')
const app = express();

const PORT = 3001

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/api', api); //added after looking back and reading the README and seeing that it was needed
app.use(express.static("public"));
//  **not sure if this is necessary

// finally realized that it was  the get routes below that I was missing after deploying to heroku and looking at the logs for errors. Saw that it was my get route and it was crashing immediately so it was the get in the server.

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html')));


// const notesRoutes = require("./routes/noteRoutes");
// const htmlRoutes = require ("./routes/htmlRoutes");

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);