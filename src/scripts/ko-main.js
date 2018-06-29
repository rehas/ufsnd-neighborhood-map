function nMapViewModel(){
  let self = this;
  self.test1 = "tester";

  self.array1 = ko.observableArray();
  self.array1.push({name: "eleman1"});
  self.array1.push({name: "eleman2"});

  self.changeColor = function(element, event){
    //element.
    console.log(element);
    console.log("element");
    $(event.target).css('color', "red");
  };
}
ko.applyBindings(new nMapViewModel());
