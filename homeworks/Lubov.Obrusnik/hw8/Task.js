
//create objects

var Tree = function(name){
    this.name = name;
    this.height = 20;
    this.weight = 500;
};

var Flower = function(name) {
    Tree.call(this, name);
    this.color = 'white';
};

//create instans of object

var tree = new Tree('Apple tree');


Flower.prototype = Object.create(Tree.prototype);
Flower.prototype.constructor = Flower;

Tree.prototype.grow = function() {
    this.height += 1;
    this.weight += 1;
};

var flower = new Flower('Hibiskus');

Flower.prototype.flavor = function () {
    console.log('sweeeeeet');
};

flower.height = 6;
flower.weight = 3;

flower.flavor();
flower.grow();
tree.grow();

console.log(tree, flower);