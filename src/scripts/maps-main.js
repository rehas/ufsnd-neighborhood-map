console.log("ready");
let map;

let initMap = function() {
  console.log("init");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.74135, lng: -73.99802},
    zoom: 14
    // styles: styles
  });
};
