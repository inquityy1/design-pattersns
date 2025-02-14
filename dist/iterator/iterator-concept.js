"use strict";
class IteratorConcept {
    constructor(aggregates) {
        this.index = 0;
        this.aggregates = aggregates;
    }
    next() {
        if (this.index < this.aggregates.length) {
            const aggregate = this.aggregates[this.index];
            this.index += 1;
            return aggregate;
        }
        throw new Error('At End of Iterator');
    }
    hasNext() {
        return this.index < this.aggregates.length;
    }
}
class Aggregate {
    method() {
        console.log('This methodd has been invoked');
    }
}
// Client
const AGGREGATE = [
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
];
const ITERABLE = new IteratorConcept(AGGREGATE);
while (ITERABLE.hasNext()) {
    ITERABLE.next().method();
}
