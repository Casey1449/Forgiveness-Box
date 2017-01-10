const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3001);
app.locals.title = 'Forgiveness Box';

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/urls', (request, response) => {
  if (!app.locals.db.urls.data) {
    return response.status(422).send({
      error: 'No urls stored'
    });
  }

  response.json(app.locals.db.urls.data);
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} now listening on 3001`);
  });
}

module.exports = app;
