
var express = require('express');
var request = require('request');
var path = require('path');

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Node luistert op poort 3000');
});

console.log("Webserver draait");

var datawebpunten;
request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek/MapServer/593/query?where=1%3D1&outFields=OBJECTID,NAAM,STRAATNAAM,HUISNUMMER,POSTCODE,DISTRICT,WEBSITE&outSR=4326&f=json',
  function(error, response, body){
    datawebpunten = JSON.parse(body);

    for(var i=0; i < datawebpunten.features.length; i++) {
                console.log(datawebpunten.features[i].attributes);
    }

  }
);

var datawifihotspots;
request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek/MapServer/60/query?where=1%3D1&outFields=OBJECTID,ID_WIFI,KLANT,LOCATIE,STRAAT,HUISNR,POSTCODE,GEMEENTE&outSR=4326&f=json',
  function(error, response, body){
    datawifihotspots = JSON.parse(body);

    for(var i=0; i < datawifihotspots.features.length; i++) {
              console.log(datawifihotspots.features[i].attributes);
    }

  }
);

app.get('/', function(req, res){
  res.render('home', {
  });
});


app.get('/all', function(req, res){
  res.render('all', {
    bibs: datawebpunten,
    wifi: datawifihotspots
  });
});


app.get('/bib', function(req, res){
  res.render('bib', {
    bibs: datawebpunten
  });
});

app.get('/wifi', function(req, res){
  res.render('wifi', {
    wifi: datawifihotspots
  });
});
