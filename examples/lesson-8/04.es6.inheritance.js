class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    run() {
        console.log(`Beast ${this.name} run!!`);
    }

    eat(food) {
        this.weight += food;
    }
}

class Dog extends Animal {
    constructor(name, weight, kind) {
        super(name, weight);
        this.kind = kind;
    }

    run() {
        super.run();
        this.wof();
    }

    wof() {
        console.log(`${this.name} wof-wof`);
    } 
}