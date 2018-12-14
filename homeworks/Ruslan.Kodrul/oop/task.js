var Tree = function(name) {
    this.name = name;
    this.height = 10;
    this.weight = 40;
}

Tree.prototype.grow = function() {
    this.height += 1;
    this.weight += 1;
}

var Flower = function(name) {
    Ship.call(this, name);
    this.color = purple;
}

Flower.prototype.flavour = function() {
    cosole.log('it smells good');
}

Flower.prototype = Object.create(Tree.prototype)
//Tree.prototype.constructor = Tree;

var tree = new Tree('');
var flower = new Flower('');

tree.grow();
flower.grow();
flower.flavour();

console.log(tree);
console.log(flower);