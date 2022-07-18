const express = require("express")
const router = express.Router()

var fs = require('fs');
const multer = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage, limits: { fields: 1, fileSize: 6000000, files: 1, parts: 2 }});


const mongodb = require('mongodb');
const Exhibition = require("../Models/exhibition");

router.get('/test', (req, res) => res.send('goal route testing!'));

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });

router.get('/', (req, res) => {
  Exhibition.find({}, (err, items) => {
      if (err) {
          console.log(err);
          res.status(500).send('An error occurred', err);
      }
      else {
          res.render('imagesPage', { items: items });
      }
  });
});

router.get('/get-images', async(req, res) => {
  let exhibitions = await Exhibition.find();
  const archived = exhibitions.filter(exhibition => {
    return exhibition.current != true && exhibition.upcoming != true
  })
  res.json(archived)
});

router.get('/get-image/:id', async (req, res) => {
  console.log(req.params.id)
  try {
    let images = await Exhibition.find({name: req.params.id});
    if (images.length == 0) {
        images = await Exhibition.find({artist: req.params.id});
    }
    res.json(images);
  } catch (err) {
    console.log(err);
    res.status(404).json({noimagesfound: 'No images found'});
  }
});

router.get('/get-current', async (req, res) => {
  try {
    let images = await Exhibition.find({current: true});
    res.json(images);
  } catch (err) {
    console.log(err);
    res.status(404).json({noimagesfound: 'No images found'});
  }
});

router.get('/get-upcoming', async (req, res) => {
  try {
    let images = await Exhibition.find({upcoming: true});
    res.json(images);
  } catch (err) {
    console.log(err);
    res.status(404).json({noimagesfound: 'No images found'});
  }
});

router.post('/', upload.single('image'), (req, res, next) => {
  
  var obj = {
      name: req.body.name,
      desc: req.body.desc,
      artist: req.body.artist,
      current: req.body.current,
      upcoming: req.body.upcoming,
      img: {
          data: fs.readFileSync('uploads/' + req.file.filename),
          contentType: 'image/png'
      }
  }
  Exhibition.create(obj);
});

module.exports = router;