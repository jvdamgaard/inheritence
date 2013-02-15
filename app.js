var Class = Object.create({
  set: function(o) {
    for (var k in o) {
      this[k] = o[k];
    }
    return this;
  }
});

var Car = Object.create(Class).set({
  drive: function() {
    console.log('wroom');
  }
});

var skoda = Object.create(Car).set({
  color: 'red',
  power: 100
});
