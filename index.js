const express = require('express');
const dbConnect = require('./config/db')
var app = express();
app.set('view engine','ejs');
const path = require('path');
app.set('views',path.join(__dirname,'/views'))

app.get('/', function (req, res){
    res.render('pages/index');
});

app.listen(80, function(){
    console.log('Example app listening on port 80!')
})

dbConnect()

