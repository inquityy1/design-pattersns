interface IPrototype {
    // Interface with clone method
    clone(): this;

    // The close is deep or shallow.
    // It is up to you how you want to implement it.
    // The details in your concrete class.
}

class MyClass implements IPrototype {
    // A Concrete Class
    field: number[];

    constructor(field: number[]) {
        this.field = field; // any value of any type
    }

    clone() {
        // return Object.assign({}, this); // shallow copy
        return JSON.parse(JSON.stringify(this)); // deep copy
    }
}

// The Client
const OBJECT1 = new MyClass([1, 2, 3, 4]);
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`);

const OBJECT2 = OBJECT1.clone();
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`);
// Change the value of one of the array elements in OBJECT2
// Depending on your clone method, either a shallow or deep copy was performed
OBJECT2.field[1] = 101;

// Comparin OBJECT1 and OBJECT2
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`);
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`);
