/* flow */

import Express from 'express';
import marked from 'marked';
import fs from 'fs';

var app = Express();
app.get('/', (req, res) =>
  fs.readFile('./test.md', 'utf-8', (err, data) =>
    res.send(marked(data))))

app.listen(3000)
