const express = require("express")
const router = express.Router()

const mongodb = require('mongodb');
const Artist = require("../Models/artist");

router.get('/test', (req, res) => res.send('goal route testing!'));

router.get('/', (req, res) => {
  Artist.find({}, (err, items) => {
      if (err) {
          console.log(err);
          res.status(500).send('An error occurred', err);
      }
      else {
          res.render('artistsPage', { items: items });
      }
  });
});

router.get('/get-artists', async(req, res) => {
    Artist.find()
    .then(artists => res.json(artists))
    .catch(err => res.status(404).json({ noartistsfound: 'No Artists found' }));
});

router.get('/get-artist/:id', async(req, res) => {
    Artist.find({name: req.params.id})
    .then(artist => res.json(artist))
    .catch(err => res.status(404).json({ noartistfound: 'No Artist found' }));
});

router.post('/', (req, res, next) => {
    console.log(req)
  var obj = {
      name: req.body.name,
      desc: req.body.desc,
      location: req.body.location
  }
  Artist.create(obj);
});

module.exports = router;