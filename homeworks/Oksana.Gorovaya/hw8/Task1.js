
class tree {
    constructor() {
    this.height = 80;
    this.weight = 50;
    }
    grow() {
        this.height++;
    }
}

class flower extends tree {
    constructor(color) {
        super();
        this.color = color;
    }
    smell() {
        console.log('this flower smells');
    }
}
let obj = new tree();
obj.grow();
console.log(obj);

let obj2 = new flower('red');
obj2.smell();
console.log(obj2);