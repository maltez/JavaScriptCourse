var Mountain = function(height, name) {
    this.height = height;
    this.name = name;
}

Mountain.prototype = Object.create({});
Mountain.prototype.stayAlone = function() {
    console.log(`Beautiful mountain ${this.name} stay alone!`);
}
Mountain.prototype.beBeautiful = function(){
    console.log(`Mountain with height ${this.height} is beautiful.`);
}

var BaldMountain = function(height, name){
    Mountain.call(this, height, name);
    this.streetBusCircle = true;
}

BaldMountain.prototype = Object.create(Mountain.prototype);
BaldMountain.prototype.playOnStreetBus = function() {
    if(this.streetBusCircle) {
        console.log('Weeeeeeeeeeeee!!!!');
    } else {
        console.log('There is no any street bus');
    }
}

BaldMountain.prototype.stayAlone = function() {
    console.log(`Height ${this.height} meters - good`);
    Mountain.prototype.stayAlone.call(this);
}

var bald = new BaldMountain(200, 'Fucking mountain');
bald.stayAlone();
bald.beBeautiful();
bald.playOnStreetBus();
