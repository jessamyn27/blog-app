const express = require('express');
const app = express();

require('./db/db')


const authorsController = require('./controllers/authors.js');

app.use('/authors', authorsController)


app.get('/', (req, res) => {
  res.render('index.ejs')
})






app.listen(3000, () => {
  console.log('app is listening on port 3000');
})
