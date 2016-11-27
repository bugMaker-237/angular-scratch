var express = require('express');
app = express();

app.use(express.static('.'));
app.use(express.static('app'));
app.get('/', (req,res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html');
});

app.listen(8000, function () {
    console.log('Express server started!!!');
});