const express = require('express');
const app = express();

const userName = 'Ronald';

app.get('/', function (request, response) {
  response.send(`<h1>Hello ${userName}</h1> `);
});

app.get('/contact', function (req, res) {
  res.send('Contact me at: ronald@gmail.com');
});

app.get('/about', function (req, res) {
  res.send('I am who I am 🤣');
});

app.get('/hobbies', function (req, res) {
  res.send('<ul><li>eat</li><li>code</li><li>sleep</li><li>repeat</li></ul>');
});

app.listen(3000, () => {
  console.log('Server started');
});
