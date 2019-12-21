const express = require('express');
const os = require('os');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'))
app.use(express.static('public'))

app.use('/api', require('./api'))

app.get('*', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
