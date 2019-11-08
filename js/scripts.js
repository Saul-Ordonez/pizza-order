//Back-End Logic//
function Pizza(size, crust, toppings, dippingSauces) {
  this.size = size,
  this.crust = crust,
  this.toppings = toppings,
  this.dippingSauces = dippingSauces,
  this.cost = 0
}

Pizza.prototype.pizzaCost = function() {
  if (this.size === '10"') {
    this.cost += 10;
  }
  if (this.size === '14"') {
    this.cost += 12;
  }
  if (this.size === '18"') {
    this.cost += 14;
  }
  if (this.size === '24"') {
    this.cost += 16;
  }
  if (this.crust === 'thin-crust') {
    this.cost += 2;
  }
  if (this.crust === 'deep-dish') {
    this.cost += 2;
  }
  if (this.crust === 'new-york') {
    this.cost += 2;
  }
  for (i = 0; i < this.toppings.length; i ++) {
      this.cost += 1;
  }
  for (i = 0; i < this.dippingSauces.length; i ++) {
      this.cost += 1;
  }
  console.log(this.cost.toFixed(2));
  return this.cost.toFixed(2);

}

//Front-End Logic//
$(document).ready(function() {
  $('form#orderForm').submit(function(event) {
    event.preventDefault();

    var size = $('input[name=pizza-size]:checked').val();
    var crust = $('input[name=pizza-crust]:checked').val();
    var toppings = $('input:checkbox[name=pizza-toppings]:checked').map(function() {
      return this.value;
    }) .get();
    var dippingSauces = $('input:checkbox[name=pizza-dipping-sauces]:checked').map(function() {
      return this.value;
    }) .get();

    var newOrder = new Pizza(size, crust, toppings, dippingSauces);
    newOrder.pizzaCost();
    $('#pizzaPrice').html(newOrder.cost);
    $('.totalPrice').show();
  });
});
