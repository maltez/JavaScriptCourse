var a = {
    __name: 'Zorro',
    sayNameStranger() {
            console.log(this);
            console.log(this.__name);
    }
};

a.age = 12;
a.sayYopurAgweZorro = function() {
    console.log(`${this.age} ${this.__name}`)
};

a.sayYopurAgweZorro();