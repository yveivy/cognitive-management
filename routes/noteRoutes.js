const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsHelpers');
const uuid = require('../helpers/uuid');


// app.post('/test', (req, res) => {
//   res.send('Test put route is working')
// });

// app.get('/test', (req, res) => {
//   res.send('Test get route is working');
// });

router.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data))));



router.post('/', (req, res) => {

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      id: uuid(),
      title,
      text,
    };

    readAndAppend(newNote, './db/db.json');
 
        res.json('Note created successfully');
    
  } else {
    res.status(400).json('formatting is important');
  }

});




module.exports = router;