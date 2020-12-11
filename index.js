//dependencies
require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const bodyparser = require('body-parser');
//middlewares
const app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log("server andando");
})
