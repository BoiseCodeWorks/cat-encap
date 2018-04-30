function Catlady() {
  // private

  var cat;
  var items = {
    box: new Item('Box', -.1),
    catNip: new Item('CatNip', -.5),
    dog: new Item('Dog', 2)
  }

  function Cat(name, img, tollerance) {
    this.name = name;
    this.img = img;
    this.tollerance = tollerance;
    this.pets = 0;
    this.currentMood = 0
    this.mood = ["Happy", "Bitey"];
    this.modifiers = []
    this.petOptions = {
      head: 1,
      belly: 2,
      tail: 100
    }
  }

  function Item(name, effect){
    this.name = name
    this.effect = effect
  }

  function drawCat() {
    var template = `
    <img src="${cat.img}" alt="">
    <h1>Name: ${cat.name}</h1>
    <h2>Status: ${cat.mood[cat.currentMood]}</h2>
    <button onclick="catLady.pet('head')">Pet Head</button>
    <button onclick="catLady.pet('belly')">Pet Belly</button>
    <button onclick="catLady.pet('tail')">Pull Tail</button>
    <button onclick="catLady.giveItem('catNip')">CatNip</button>
    <button onclick="catLady.giveItem('box')">Box</button>
    <button onclick="catLady.giveItem('dog')">Dog</button>
    <button onclick="catLady.reset()">Reset</button>
    `
    document.getElementById('cat').innerHTML = template
  }

  function checkStatus(){
    if(cat.pets >= cat.tollerance){
      cat.currentMood = 1
      drawCat()
    }
  }

  function addModifiers(){
    var total = 0
    //look at each cats modifiers values and add to total
    for (var i = 0; i < cat.modifiers.length; i++) {
      var mod = cat.modifiers[i];
      total += mod.effect
    }
    return total
  }

  // public

  this.makeCat = function makeCat(event) {
    event.preventDefault();
    debugger
    console.log("WHAT!")
    var data = event.target
    cat = new Cat(data.name.value, data.imgUrl.value, data.tolerance.value)
    drawCat()
  };

  this.pet = function pet(location){
    debugger
    cat.pets += cat.petOptions[location] + addModifiers()
    checkStatus()
  }

  this.giveItem = function giveItem(type) {
    cat.modifiers.push(items[type])
  };

  this.reset = function reset() {
    
    cat.pets = 0
    cat.currentMood = 0
    drawCat()
  };
  
}

var catLady = new Catlady()