interface IIterator {
    next(): IAggregate;
    // Return the object in collection

    hasNext(): boolean;
    // Returns Boolean whether at end of collection or not
}

class IteratorConcept implements IIterator {
    index: number;
    aggregates: IAggregate[];

    constructor(aggregates: IAggregate[]) {
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

interface IAggregate {
    method(): void;
}

class Aggregate implements IAggregate {
    method(): void {
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
