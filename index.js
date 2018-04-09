const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const PORT = process.env.PORT || 5000;

var app = express()
    .use(express.static(path.join(__dirname, 'public')))
    .use("/img", express.static(__dirname + '/img'))
    .use("/js", express.static(__dirname + '/js'))
    .use("/css", express.static(__dirname + '/css'))
    .use('/lib', express.static(__dirname + '/node_modules'))
    .set('views', __dirname + '/public/views')
    .set('view engine', 'html')
    .engine('html', require('ejs').renderFile);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


var server = require('./server/routes.js');

// get all brokers
app.post('/incrementLoginCount', server.incrementLoginCount);
app.post('/incrementPageViewsCount', server.incrementPageViewsCount);

app.get('/', (req, res) => res.render('datadog-demo.html'));
