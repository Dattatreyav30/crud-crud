const express = require('express');

const bodyParser = require('body-parser');

const From = require('./models/formModel');

const app = express();

const cors = require('cors');

const formRoutes = require('./routes/formRoute');

app.use(cors());

app.use(bodyParser.json({ extended: false }));

app.use(formRoutes);

app.listen(3000);