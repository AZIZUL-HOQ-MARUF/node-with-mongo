const express = require('express'),
    app = express(),
    expressLayout = require('express-ejs-layouts');
const port = 3000;
//static files
app.use(express.static(__dirname + '/public'));

//set ejs as template
app.set('view engine', 'ejs');
app.use(expressLayout);
//routing
app.use(require('./app/router'));
app.listen(port, () => console.log(`Node With Mongo app listening on port ${port}!`))
