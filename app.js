var express = require('express');
let app = express();
var dir = require('node-dir');

dir.subdirs(__dirname, function(err, subdirs) {
    if (err) throw err;
    console.log(subdirs);
})
app.use(express.static('.'));
app.use(express.static('app'));
app.get('/', (req,res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html');
});

app.listen(8000, function () {
    console.log('Express server started!!!');
});