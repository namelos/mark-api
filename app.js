/* flow */

import Express from 'express';
import marked from 'marked';
import fs from 'fs';

var app = Express();

app.set('view engine', 'jade');
app.set('views', './');

app.get('/', (req, res) =>
  fs.readFile('./test.md', 'utf-8', (err, data) =>
    res.render('index', {content: marked(data)})))

app.listen(3000)
