
var friends = ["Mickey", "Daisy", "Goofy", "Ralph", "Minnie"];
var locations = ["the Park", "the Private School", "the Public Restroom", "the Amusement Park", "the Kitchen", "the Galleria", "the Dentist Office", "the Convenience Store", "the railroad Station", "the Apple Store"];
var weapons = ["a Bazooka", "a Knife", "a Hands", "an Axe", "a Gun", "a Foot", "a Chair", "a Spoon", "a Computer", "a Ladder", "a Water Bottle", "an Apple Watch", "a PS5", "a Shuriken", "a BB Gun", "a Lord of the Ring", "the Facebook", "a Dog", "a Cat", "the Illuminati"];

var accCon = document.getElementsByClassName('acc-container')[0];


for (i = 1; i <= 100; i++) {
    var h3 = document.createElement('h3');
    h3.classList.add('acc-h3');
    h3.innerText = `Accusation ${i}`;
    accCon.append(h3);
  
    h3.addEventListener('click', clickHandler(i));
  }
  
  function clickHandler(i) {
    return function () {
      alert(`Accusation ${i}: I accuse ${friends[i % friends.length]} at ${locations[i % locations.length]} with ${weapons[i % weapons.length]}`);
    };
  }