//dependencies
require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const bodyparser = require('body-parser');
const cors = require('cors');
//middlewares
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log("server andando");
})
