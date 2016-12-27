/**
 * Created by srinivasraomc on 26/12/2016.
 */

var express = require('express');
var app = express();

//app.use(express.static(__dirname+'/public'));


app.get('/', function(req, res)
{
    //console.log('Launch Hello');
    res.sendFile(__dirname+'/public/index.html');
});
app.use( express.static(__dirname+'/public'));

var port = 3000;

app.listen(port, function()
    {
        console.log('running running in port node' +port);
    }
);
