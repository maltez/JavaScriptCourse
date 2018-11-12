/**
 * It`s object
 * @param {string} name
 */
const Ship = function (name) {
    this.name = name;
    this.__whores = 0;
}


/**
 * Prototype
 * */
Ship.prototype.sail = function () {
    console.log('\n\n\n');
    console.log(this);
    console.log('We have ' + this.__whores + ' whores;')


    if (this.__whores < 2) {
        console.log('Need more whores, you can call PIMP.')
        return false;
    } else {
        console.log('So go to sail!');
        console.log('Yeeee!!!');
        return true;
    }
}
Ship.prototype.callPIMP = function (count) {
    console.log('Call PIMP.')
    this.__whores += count;
    console.log('whores: ' + this.__whores);
} 

/**
 * It`s static member
 * */
Ship.beep = function () {
    console.log('Beeeeep!');
}
/**
 * Functional inheritance
 * @param {string} name
 */
var Yacht = function (name) {
    Ship.call(this, name);
    this.shkiper = true;
    this.alcohol = 100;
}

/**
 * Prototype inheritance
 * */
Yacht.prototype = Object.create(Ship.prototype);

Yacht.prototype.drink = function (percent_to_drink) {
    this.alcohol -= percent_to_drink;
    console.log(this.alcohol + ' alcohol we have!');
}

var yacht = new Yacht('  beda');
yacht.callPIMP(6);
yacht.sail();
yacht.drink(20);

