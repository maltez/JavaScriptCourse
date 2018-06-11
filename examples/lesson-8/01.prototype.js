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

var kazbek = new Mountain(3000, 'Kazbek');
kazbek.stayAlone();