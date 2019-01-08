var map = L.map('map').setView([51.211907, 4.42], 18);

L.tileLayer('https://api.mapbox.com/styles/v1/kobevg/cjpcleoxp102r2snqzs371qbf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29iZXZnIiwiYSI6ImNqbjJ4YmxsMDBwcWcza2w4Zml1ZmUzYncifQ.sckljvEA3zi97cUOZQ8BJQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia29iZXZnIiwiYSI6ImNqbjJ4YmxsMDBwcWcza2w4Zml1ZmUzYncifQ.sckljvEA3zi97cUOZQ8BJQ'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

//functie nav
  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
