const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('express-cors');

app.use(cors());
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3001);
app.locals.title = 'Forgiveness Box';

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/grudges', function (req, res) {
  fs.readFile(__dirname + "/fakedata.json", "utf8", function (err, data) {
    let grudges = JSON.parse(data);
    console.log( JSON.stringify(grudges) );
    res.send( JSON.stringify(grudges) );
  });
})


if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} now listening on 3001`);
  });
}

module.exports = app;
