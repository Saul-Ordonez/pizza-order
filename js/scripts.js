function Pizza(size, crust, topping1, topping2, topping3, basePrice) {
  this.size = size,
  this.crust = crust,
  this.topping1 = topping1,
  this.topping2 = topping2,
  this.topping3 = topping3,
  this.basePrice = 12
}

Pizza.prototype.customerPizza = function() {
  if (this.size === '14"') {
    this.basePrice += 2;
  }
  if (this.size === '18"') {
    this.basePrice += 4;
  }
  if (this.size === '24"') {
    this.basePrice += 6;
  }
}
