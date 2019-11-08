function Pizza(size, crust, topping1, topping2, topping3, topping4, basePrice) {
  this.size = size,
  this.crust = crust,
  this.toppings = [],
  this.cost = 12
}

Pizza.prototype.pizzaSize = function() {
  if (this.size === '14"') {
    this.cost += 2;
  }
  if (this.size === '18"') {
    this.cost += 4;
  }
  if (this.size === '24"') {
    this.cost += 6;
  }
  return this.cost;
}

Pizza.prototype.pizzaCrust = function() {
  if (this.crust === 'thinCrust') {
    this.cost += 2;
  }
  if (this.crust === 'deepDish') {
    this.cost += 2;
  }
  return this.cost;
}

Pizza.prototype.pizzaTopping1 = function() {
  if (this.toppings === 'peperoni') {
    this.cost += 1;
  }
  if (this.toppings === 'sausage') {
    this.cost += 1;
  }
  if (this.toppings === 'olive') {
    this.cost += 1;
  }
  if (this.toppings === 'jalapeño') {
    this.cost += 1;
  }
  return this.cost;
}

Pizza.prototype.pizzaTopping2 = function() {
  if (this.toppings === 'peperoni') {
    this.cost += 1;
  }
  if (this.toppings === 'sausage') {
    this.cost += 1;
  }
  if (this.toppings === 'olive') {
    this.cost += 1;
  }
  if (this.toppings === 'jalapeño') {
    this.cost += 1;
  }
  return this.cost;
}

Pizza.prototype.pizzaTopping3 = function() {
  if (this.toppings === 'peperoni') {
    this.cost += 1;
  }
  if (this.toppings === 'sausage') {
    this.cost += 1;
  }
  if (this.toppings === 'olive') {
    this.cost += 1;
  }
  if (this.toppings === 'jalapeño') {
    this.cost += 1;
  }
  return this.cost;
}

Pizza.prototype.pizzaTopping4 = function() {
  if (this.toppings === 'peperoni') {
    this.cost += 1;
  }
  if (this.toppings === 'sausage') {
    this.cost += 1;
  }
  if (this.toppings === 'olive') {
    this.cost += 1;
  }
  if (this.toppings === 'jalapeño') {
    this.cost += 1;
  }
  return this.cost;
}
