function nMapViewModel(){
  let self = this;
  self.test1 = "tester";
  self.query = ko.observable('');

  self.array1 = ko.observableArray();
  self.array1.push({name: "eleman1"});
  self.array1.push({name: "eleman2"});

  self.changeColor = function(element, event){
    //element.
    console.log(element);
    console.log("hover");
    $(event.target).css('color', "red");
  };
  self.clicked = function(element, event){
    //element.
    console.log(element);
    console.log("clicked");
    $(event.target).css('color', "yellow");
  };
  self.search = function(){
    console.log("Searched");
  }

  self.query.subscribe(self.search);
}
ko.applyBindings(new nMapViewModel());

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
