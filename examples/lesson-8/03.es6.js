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

const dog = new Animal('Bobik', 12);
dog.run();