
var BattleField = function(width, height) {
    this.width = width;
    this.height = height;
};

var Tank = function(x, y, fuel) {
    this.fuel = fuel;
    this.ammo = 100;
    this.result;
    this.position = { 
        x: x, 
        y: y 
    };
    this.moveLeft = function() {
        if(this.position.x > 0) {
            if(this.fuel > 0) {
                this.position.x -= 2;
                this.fuel -= 0.5;
            } else {
                this.chargeFuel();
            }
        } else {
            this.position.x = 0;
        }
        
    }
    this.moveRight = function() {
        if(this.position.x < battlefield.width - 40) {
            if(this.fuel > 0) {
                this.position.x += 2;
                this.fuel -=0.5;
            } else {
                this.chargeFuel();
            }
        } else {
            this.position.x = battlefield.width - 40;
        }
    }
    this.moveUp = function() {
        if(this.position.y > 0) {
            if(this.fuel > 0) {
                this.position.y -= 2;
                this.fuel -=0.5;
            } else {
                this.chargeFuel();
            }
        } else {
            this.position.y = 0
        }
        
    }
    this.moveDown = function() {
        if(this.position.y < battlefield.height - 40) {
            if(this.fuel > 0) {
                this.position.y += 2;
                this.fuel -=0.5;
            } else {
                this.chargeFuel();
            }
        } else {
            this.position.y = battlefield.height - 40;
        }
    }
    this.chargeFuel = function() {
        this.result = confirm('No fuel. Would you like to charge your tank?');
        this.result ? this.fuel = 100 : this.fuel = 0;
    }
};

var Obstacle = function(x, y) {
    this.position = { 
        x: x, 
        y: y 
    };
};

var Obstacle1 = function(x,y) {
    Obstacle.call(this,x,y);
    this.background = "url('img/obst1.png')";
};

var Obstacle2 = function(x,y) {
    Obstacle.call(this,x,y);
    this.background = "url('img/obst2.png')";
};

var MyTank = function(x,y) {
    Tank.call(this,x,y,100);
    this.background = "url('img/myTank.png')";
};

var Tank1 = function(x,y) {
    Tank.call(this,x,y,100);
    this.background = "url('img/tank.png')";
};

var Tank2 = function(x,y) {
    Tank.call(this,x,y,100);
    this.background = "url('img/tank.png')";
};

var Tank3 = function(x,y) {
    Tank.call(this,x,y,100);
    this.background = "url('img/tank.png')";
};

var Tank4 = function(x,y) {
    Tank.call(this,x,y,100);
    this.background = "url('img/tank.png')";
};

var battlefield = new BattleField(450,450);
var obstacle1 = new Obstacle1(300,300);
var obstacle2 = new Obstacle2(190,190);
var myTank = new MyTank(150,250,100);
var tank1 = new Tank1(280,50,100);
var tank2 = new Tank2(140,90,100);
var tank3 = new Tank3(45,200,100);
var tank4 = new Tank4(345,200,100);

var obstaclesArray = [obstacle1,obstacle2];
var tanksArray = [myTank,tank1,tank2,tank3,tank4];
var field = document.getElementById('battlefield');

var setPosition = function(tank,left,top,fuel) {
    tank.style.left = left + 'px';
    tank.style.top = top + 'px';
};

var setFuelProgress = function(tank,fuelProgress) {
    tank.querySelector('.fuel-progress').style.height = fuelProgress + '%';
};

var buildField = function() {
    field.style.width = battlefield.width + 'px';
    field.style.height = battlefield.height + 'px';

    tanksArray.forEach((item,index) => {
        var tank = document.createElement('div');
        var fuelShow = document.createElement('div');
        var fuelProgress = document.createElement('span');
        field.appendChild(tank);
        tank.appendChild(fuelShow);
        fuelShow.appendChild(fuelProgress);
        fuelProgress.className = 'fuel-progress';
        fuelShow.className = 'fuel';
        tank.id = 'tank' + (index + 1);
        tank.className = 'tank';
        fuelProgress.style.height = item.fuel + '%';
        tank.style.backgroundImage = item.background;
        setPosition(tank,item.position.x,item.position.y);
    });
    
    obstaclesArray.forEach((item,index) => {
        var obstacle = document.createElement('div');
        field.appendChild(obstacle);
        obstacle.id = 'obstacle' + (index + 1);
        obstacle.className = 'obstacle';
        obstacle.style.left = item.position.x + 'px';
        obstacle.style.top = item.position.y + 'px';
        obstacle.style.backgroundImage = item.background;
    });
};

var moveMyTank = function(event) {
    console.log(event.keyCode);
    if(event.keyCode === 38) {
        myTank.moveUp();
        setPosition(document.getElementById('tank1'),myTank.position.x,myTank.position.y);
        setFuelProgress(document.getElementById('tank1'),myTank.fuel);
    }
    if(event.keyCode === 37) {
        myTank.moveLeft();
        setPosition(document.getElementById('tank1'),myTank.position.x,myTank.position.y);
        setFuelProgress(document.getElementById('tank1'),myTank.fuel);
    }
    if(event.keyCode === 39) {
        myTank.moveRight();
        setPosition(document.getElementById('tank1'),myTank.position.x,myTank.position.y);
        setFuelProgress(document.getElementById('tank1'),myTank.fuel);
    }
    if(event.keyCode === 40) {
        myTank.moveDown();
        setPosition(document.getElementById('tank1'),myTank.position.x,myTank.position.y,);
        setFuelProgress(document.getElementById('tank1'),myTank.fuel);
    }
};

buildField();
document.addEventListener('keydown',moveMyTank);
