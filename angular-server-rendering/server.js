// Angular requires Zone.js
require('zone.js/dist/zone-node');

const express = require('express');
const { ngExpressEngine } = require('@nguniversal/express-engine');

// create express app
const app = express();

// import server module bundle
var { ServerAppModuleNgFactory } = require('./dist-server/main.bundle');

// set up engine for .html file
app.engine('html', ngExpressEngine({
    bootstrap: ServerAppModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', 'dist-browser');

// server static files
app.use(express.static(__dirname + '/dist-browser', { index: false }));

// simple cache
const cache = {};

// return rendered index.html on every request
app.get('*', (req, res) => {

  const url = req.url;
  const now = new Date();

  console.log("got url" ,url);

   if (cache[url] && now < cache[url].expiry) {
	   console.log("we can get from cache = " + url);
     return res.send(cache[url].html);
   }

    res.render('index', { req, res } ,(err, html) => {
    // Expire in 1 month
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 30);

    cache[url] = { expiry, html };
    res.send(html);
  });
    console.log(`new GET request at : ${req.originalUrl}`);
});

// start server and listen
app.listen(3000, () => {
    console.log('Angular server started on port 3000');
});
