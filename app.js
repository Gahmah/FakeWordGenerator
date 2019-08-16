var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var engine = require('./RandomWordEngine/Engine');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.text());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/api/v1/cast', (req, res) =>{
    let resBody = {firstResult:"No Input"};
    if(req.body.spell.length){
        resBody = { Results: engine.Fill(req.body.spell)};
    }
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(resBody));
    res.end();
});

module.exports = app;
