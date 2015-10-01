describe('pizza', function() {
  it("returns 10 for a small pizza with no toppings", function() {
    var size = "small";
    var smallPizza = new Pizza(0, size);
    expect(smallPizza.getPrice()).to.equal(10);
  });

  describe('pizza', function() {
    it("returns 10.50 for a small pizza with 1 topping", function() {
      var size = "small";
      var smallPizza = new Pizza(1, size);
      expect(smallPizza.getPrice()).to.equal(10.50);
    });

  it("returns 16 for a medium two topping", function() {
    var size = "medium";
    var mediumPizza = new Pizza(2, size);
    expect(mediumPizza.getPrice()).to.equal(16);
  });

  it("returns 22 for a large with 4 toppings", function() {
    var size = "large";
    var largePizza = new Pizza(4, size);
    expect(largePizza.getPrice()).to.equal(22);
  });

});
