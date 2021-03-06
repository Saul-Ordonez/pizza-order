//Back-End Logic//
function Pizza(size, crust, toppings, dippingSauces, breadsticks) {
  this.size = size,
  this.crust = crust,
  this.toppings = toppings,
  this.dippingSauces = dippingSauces,
  this.breadsticks = breadsticks,
  this.cost = 0
}

Pizza.prototype.pizzaCost = function() {
  if (this.size === '10"') {
    this.cost += 10;
  }
  else if (this.size === '14"') {
    this.cost += 12;
  }
  else if (this.size === '18"') {
    this.cost += 14;
  }
  else if (this.size === '24"') {
    this.cost += 16;
  }
  else {
    alert('Please select a size').reset();
  }
  if (this.crust === 'Original') {
    this.cost += 0;
  }
  else if (this.crust === 'Thin Crust') {
    this.cost += 2;
  }
  else if (this.crust === 'Deep Dish') {
    this.cost += 2;
  }
  else if (this.crust === 'New York') {
    this.cost += 2;
  }
  else {
    alert('Please select a crust type').reset();
  }
  for (i = 0; i < this.toppings.length; i ++) {
      this.cost += 1;
  }
  for (i = 0; i < this.dippingSauces.length; i ++) {
      this.cost += 1;
  }
  if (this.breadsticks === 'Duh') {
    this.cost += 3;
  }
  if (this.cost === 0) {
    alert('Please enter information to complete form');
  }
  return this.cost.toFixed(2);
}

//Front-End Logic//
$(document).ready(function() {
  $('form#orderForm').submit(function(event) {
    event.preventDefault();

    var size = $('input[name=pizza-size]:checked').val();
    var crust = $('input[name=pizza-crust]:checked').val();
    var breadsticks = $('input[name=bread-sticks]:checked').val();
    var toppings = $('input:checkbox[name=pizza-toppings]:checked').map(function() {
      return this.value;
    }).get();
    var dippingSauces = $('input:checkbox[name=pizza-dipping-sauces]:checked').map(function() {
      return this.value;
    }).get();


    var newOrder = new Pizza(size, crust, toppings, dippingSauces, breadsticks);
    newOrder.pizzaCost();
    $('#pizzaPrice').html(newOrder.cost);
    if (newOrder.cost > 0) {
      $('.totalPrice').show();
    }

    $('#showSize').text(size);
    $('#showCrust').text(crust);
    $('#showToppings').text(newOrder.toppings);
    $('#showDippingsauces').text(newOrder.dippingSauces);
    $('#showBreadsticks').text(newOrder.breadsticks);
    if (newOrder.cost > 0) {
      $('#yourOrder').show();
    }
  });
});
