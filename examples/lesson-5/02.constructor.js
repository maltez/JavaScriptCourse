var Tank = function() {
    this.gun = 1;
    this.fuel = 100;

    this.move = function() {
        this.fuel--;
        console.log('Trrrrrrr');
    }
}

var tank1 = new Tank();
tank1.move();