// Bridge Pattern Concept Sample Code

interface IAbstraction {
    method(value: string[]): void;
}

class RefinedAbstraction implements IAbstraction {
    #implementer: IImplementer;

    constructor(implementer: IImplementer) {
        this.#implementer = implementer;
    }

    method(value: string[]) {
        this.#implementer.method(value);
    }
}

// class RefinedAbstractionB implements IAbstraction {
//     #implementer: IImplementer;

//     constructor(implementer: IImplementer) {
//         this.#implementer = implementer;
//     }

//     method(value: string[]) {
//         this.#implementer.method(value);
//     }
// }

interface IImplementer {
    method(value: string[]): void;
}

class ConcreteImplemenrA implements IImplementer {
    method(value: string[]) {
        console.log(value);
    }
}

class ConcreteImplemenrB implements IImplementer {
    method(value: string[]) {
        value.forEach((v) => console.log(v));
    }
}

// The Client
const VALUES = ['a', 'b', 'c'];

const REFINED_ABSTRACTION_A = new RefinedAbstraction(new ConcreteImplemenrA());
REFINED_ABSTRACTION_A.method(VALUES);

const REFINED_ABSTRACTION_B = new RefinedAbstraction(new ConcreteImplemenrB());
REFINED_ABSTRACTION_B.method(VALUES);
