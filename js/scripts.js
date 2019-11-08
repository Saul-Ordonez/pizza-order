//Back-End Logic//
function Pizza(size, crust, cost) {
  this.size = size,
  this.crust = crust,
  this.toppings = [],
  this.dippingSauces = [],
  this.cost = 0
}

Pizza.prototype.orderCost = function() {
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
  if (this.toppings.length > 0) {
    this.toppings.forEach(function(topping) {
      this.cost += 1;
    });
  }
  if (this.dippingSauces.length > 0) {
    this.dippingSauces.forEach(function(dippingSauce) {
      this.cost += .5;
    });
  }
  return this.cost.fixed(2);
}
