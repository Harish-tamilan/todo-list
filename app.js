const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const sequelize = require('./database');
const app = express();


app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views','views');

app.use(routes);

sequelize.sync().then(res=>{
    app.listen(4500);
});
