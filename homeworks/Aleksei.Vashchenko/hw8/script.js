var Tree = function() {
    this.height = 20;
    this.weight = 100; 
}

Tree.prototype.grow = function(){
    console.log('Groooooooow');
}

var tree = new Tree();

console.log(tree);
tree.grow();

var Flower = function() {
    Tree.call(this);
    this.color = 'green';
    // this.height = 5;
    //.this.weight = 3;
}
Flower.prototype = Object.create(Tree.prototype);
var flower = new Flower();
Flower.prototype.grow = function() {
    console.log('Grow');
}
Flower.prototype.flavour = function() {
    console.log('nice');
    }

console.log(flower);
flower.grow();
flower.flavour();
