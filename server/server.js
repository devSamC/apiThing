const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

const Sausage = require(`./models/sausage.js`);
const sausageRoutes = require('./controllers/sausage')
app.use('/sausages',sausageRoutes);
app.use('/sausages/mostdelicious',sausageRoutes);

app.listen(port, () => console.log(`Express departing now from http://localhost:${port}!`));

module.exports = app;