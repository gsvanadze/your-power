
const cors = require('cors');
const express = require('express');
const app = express();
const routes = require('./routes/app-routes')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
app.use(routes)

app.listen(3000)


