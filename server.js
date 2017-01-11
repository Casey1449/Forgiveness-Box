const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const shortid = require('shortid');
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const cors = require('express-cors');
const dbName = 'grudgeDB';
const connectionString = 'mongodb://localhost:27017' + dbName;
let Grudge = require('./models/grudge');

mongoose.connect(connectionString);

app.use(cors());
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3001);
app.locals.title = 'Forgiveness Box';

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'index.html'));
 });

app.get('/grudges', function(req, res) {
  Grudge.find(function(err, grudges) {
    res.send(grudges);
  });
});

app.post('/grudges', function (req, res) {
  let grudge = new Grudge({
    id: shortid.generate(),
    name: req.body.name,
    grievance: req.body.grievance,
    forgiveness: false,
  })

  grudge.save(function(err){
    if (err) {
      res.send(err);
    }
    Grudge.find(function(err, grudges){
      res.send(grudges);
    });
  });
});


if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} now listening on 3001`);
  });
}

module.exports = app;
