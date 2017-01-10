const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// app.use(express.static('./build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3001);
app.locals.title = 'Forgiveness Box';
//
// app.get('/', (request, response) => {
//   fs.readFile(`${__dirname}/index.html`, (err, file) => {
//     response.send(file);
//   });
// });
//


app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} now listening on 3001`);
  });
}
//
// app.use(express.static('./build'));
//
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, './build', 'index.html'));
// });
//
// app.listen(9000);

module.exports = app;
