function Pizza(size, crust, topping1, topping2, topping3, topping4, basePrice) {
  this.size = size,
  this.crust = crust,
  this.topping1 = topping1,
  this.topping2 = topping2,
  this.topping3 = topping3,
  this.topping4 = topping4
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
  if (this.topping1 === 'peperoni') {
    this.cost += 1;
  }
  if (this.topping1 === 'sausage') {
    this.cost += 1;
  }
  if (this.topping1 === 'olive') {
    this.cost += 1;
  }
  if (this.topping1 === 'jalapeño') {
    this.cost += 1;
  }
  return this.cost;
}

Pizza.prototype.pizzaTopping2 = function() {
  if (this.topping2 === 'peperoni') {
    this.cost += 1;
  }
  if (this.topping2 === 'sausage') {
    this.cost += 1;
  }
  if (this.topping2 === 'olive') {
    this.cost += 1;
  }
  if (this.topping2 === 'jalapeño') {
    this.cost += 1;
  }
  return this.cost;
}

Pizza.prototype.pizzaTopping3 = function() {
  if (this.topping3 === 'peperoni') {
    this.cost += 1;
  }
  if (this.topping3 === 'sausage') {
    this.cost += 1;
  }
  if (this.topping3 === 'olive') {
    this.cost += 1;
  }
  if (this.topping3 === 'jalapeño') {
    this.cost += 1;
  }
  return this.cost;
}

Pizza.prototype.pizzaTopping4 = function() {
  if (this.topping4 === 'peperoni') {
    this.cost += 1;
  }
  if (this.topping4 === 'sausage') {
    this.cost += 1;
  }
  if (this.topping4 === 'olive') {
    this.cost += 1;
  }
  if (this.topping4 === 'jalapeño') {
    this.cost += 1;
  }
  return this.cost;
}
