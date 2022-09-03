const express = require('express');
const dbConnect = require('./config/db')
const enrutador = require('./routes/index')
var app = express();
app.set('view engine','ejs');
const path = require('path');
app.set('views',path.join(__dirname,'/views'))

app.use('/',enrutador);

app.get('/', function (req, res){
    res.render('pages/index');
});

const PORT = process.env.PORT || 9000
app.listen(PORT, function()
{
    console.log('Example app listening on port'+`${PORT}`);
})


dbConnect()

