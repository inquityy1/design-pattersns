"use strict";
// The Chain of Responsibility Pattern
class Successor1 {
    handle(payload) {
        console.log(`Successor1 payload = ${payload}`);
        const test = Math.floor(Math.random() * 2) + 1;
        if (test === 1) {
            payload += 1;
            payload = new Successor1().handle(payload);
        }
        else {
            payload -= 1;
            payload = new Successor2().handle(payload);
        }
        return payload;
    }
}
class Successor2 {
    handle(payload) {
        console.log(`Successor2 payload = ${payload}`);
        const test = Math.floor(Math.random() * 3) + 1;
        if (test === 1) {
            payload = payload * 2;
            payload = new Successor1().handle(payload);
        }
        else if (test === 2) {
            payload = payload / 2;
            payload = new Successor2().handle(payload);
        }
        return payload;
    }
}
class Chain {
    start(payload) {
        return new Successor1().handle(payload);
    }
}
// Client
const CHAIN = new Chain();
const PAYLOAD = 1;
const OUT = CHAIN.start(PAYLOAD);
console.log(`Finished result = ${OUT}`);
