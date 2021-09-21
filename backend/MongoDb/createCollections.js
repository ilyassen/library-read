var MongoClient = require('mongodb').MongoClient;

const {dbUrl, dbName, mangaCollection} = require('../config');

MongoClient.connect(dbUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.createCollection(mangaCollection, function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });