var Car = function(fuel) {
    this.wheel = 4;
    this.fuel = fuel;
    var coordinates = { x: 0, y: 0 };
    this.setCoordinate = function(coordinate) {
        coordinates = coordinate;
        console.log(`Coordinates set to: ${coordinates}`);
    }
    this.moveRight = function() {
        if(this.fuel > 0) {
            this.fuel -= 1;
        }   else {
            console.log('Car does not move without fuel');
            return;
        }

        coordinates.x += 1;
        console.log(coordinates);
    }
}

var car = new Car(10);
car.moveRight();

var Ferrari = function(fuel) {
    Car.call(this, fuel);
    this.color = 'Red';
}

var ferrari = new Ferrari(100);
ferrari.setCoordinate({x:100, y:100});
console.log(ferrari)
ferrari.moveRight();

