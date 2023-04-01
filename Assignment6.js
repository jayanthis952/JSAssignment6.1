class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  
    area() {
      return this.length * this.width;
    }
  }
  
  class Square extends Rectangle {
    constructor(side) {
      super(side, side);
    }
  }
  const rectangle = new Rectangle(4, 5);
  console.log(rectangle.area()); 
  
  const square = new Square(3);
  console.log(square.area()); 
  