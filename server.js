var express = require('express');
var app = express();

app.use(express.compress());
app.use(express.static(__dirname + '/public', { maxAge: 100 }));

app.listen(process.env.PORT || 3000);
