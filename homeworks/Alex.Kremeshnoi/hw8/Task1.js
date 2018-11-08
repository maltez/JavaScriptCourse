var Tree = function(name) {
    this.name = name;
    this.height = 0;
    this.weight = 0;
};

Tree.prototype.grow = function(height, weight) {
    this.height += height;
    this.weight += weight;
};

var tree = new Tree('Oak');
tree.grow(1000, 200);
console.log(tree);

var Flower = function(name) {
    Tree.call(this, name);
    this.color = 'green';
    this.size = 0;
};

Flower.prototype = Object.create(Tree.prototype);

Flower.prototype.blossom = function(size) {
    this.size += size;
};

var flower = new Flower('Oak flower');
flower.grow(10, 2);
flower.blossom(10);
console.log(flower);