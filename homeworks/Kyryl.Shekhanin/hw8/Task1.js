'use strict'



/**
 * Create Tree
 * @param {number} height
 * @param {number} weight
 */
const Tree = function (height = 10, weight = 1) {
    this.height = height;
    this.weight = weight;
};

Tree.prototype.grow = function (centimeter = 10) {
    if (typeof centimeter !== 'number') {
        return;
    }

    this.height += centimeter;
}



/**
 * Create Flower
 * @param {number} height
 * @param {number} weight
 * @param {string} color
 */
const Flower = function (height = 10, weight = 1, color = 'wonderful') {
    Tree.call(this, height, weight);
    this.color = color;
}

Flower.prototype.__proto__ = Object.create(Tree.prototype);

Flower.prototype.grow = function (milimeter = 10) {
    if (typeof milimeter !== 'number') {
        return;
    }

    console.log('I`m growing, but growing other way...');
    this.height += (milimeter / 10);
}
Flower.prototype.flavor = function () {
    console.log('You die from allergy!');
    console.log('Be Happy, don\'t worry...');
}


var holyShit = new Flower(1, 1, 'green');

holyShit.grow(15);
holyShit.flavor();

console.log(holyShit);

