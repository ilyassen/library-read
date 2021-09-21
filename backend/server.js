const express = require('express')

const app = express()

const {getNames, getChapters, getChapterManga, getChaptersUrls} = require('./utils');

const {dbUrl, dbName, mangaCollection} = require('./config');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


// CORS
const cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))



const Manga = require("./models/Manga")

let names;
app.listen(8000, () => {
    console.log('Server started!');
  });


  app.route('/api/cats').get((req, res) => {
    res.send({
      cats: [{ name: 'lilly' }, { name: 'lucy' }],
    })
  });

  app.route('/api/mymangas').get((req, res) => {

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
        var dbo = db.db("mangadb");

        dbo.collection('mangas').find().toArray((err, results) => {
            if(err) throw err;
            res.send({
                  data: results
                })
            db.close();
        })
      });

        // Manga.find()
        //   .then ( Mangas => {
        //       res.json({
        //         data: Mangas
        //       })
        //   })
        //   .catch ( err => {
        //       res.json({
        //         message: err.message
        //       })
        //   })
        // db.close();
   
  });

  app.route('/api/mangas').get((req, res) => {
    getNames().then(function(result) {
        res.send({
            mangas: result
          })
    });
  });

  app.route('/api/findmangas').get((req, res) => {
    getNames().then(function(result) {
        res.send({
            mangas: result
          })
    });
  });

  app.route('/api/manga/:name').get((req, res) => {
    console.log(req.params['name']);
    getChapters(req.params['name']).then(function(result) {
        res.send({
            chapters: result
          })
    });
  });

  app.route('/api/manga/:name/:chapter').get((req, res) => {
    console.log(req.params['name'],req.params['chapter']);
    getChapterManga(req.params['name'],req.params['chapter']).then(function(result) {
        res.send({
            chapters: result
          })
    });
  });

  app.route('/api/mangaaa/:name').get((req, res) => {
    console.log(req.params['name']);
    getChaptersUrls(req.params['name']).then(function(result) {
        res.send({
            chapters: result
          })
    });
  });

  const bodyParser = require('body-parser')
    app.use(bodyParser.json())
    app.route('/api/cats').post((req, res) => {
    res.send(201, req.body)
    })