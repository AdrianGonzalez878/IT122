'use strict';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAll, getItem } from './data.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
  const items = getAll();
  res.render('home', { items });
});

// Detail route
app.get('/item/:id', (req, res) => {
  const item = getItem(req.params.id);
  if (item) {
    res.render('detail', { item });
  } else {
    res.status(404).send('Item not found');
  }
});

// About route
app.get('/about', (req, res) => {
  res.send('This class is about making great web sites');
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('404 - Not found');
});

app.listen(app.get('port'), () => {
  console.log('Express started on http://localhost:' + app.get('port'));
});
