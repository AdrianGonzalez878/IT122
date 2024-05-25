'use strict'
import express from 'express';

import * as data from './data.js';

console.log("1 - Program Start");

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

// define some routes
app.get('/', (req,res) => {
  res.render('home', { students: data.getAll() });
});

app.get('/students/:name', (req, res) => {
  console.log(req.params.name)
  res.send(`Welcome ${req.params.name}`);
});

app.get('/about', (req,res) => {
  res.sendFile('/public/about.html');
});

// define 404 handler
app.use((req,res) => {
 res.status(404);
 res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
  console.log('Express started'); 
});