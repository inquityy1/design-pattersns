"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor(id) {
        this.id = id;
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}
exports.Singleton = Singleton;
const OBJECT1 = new Singleton(1);
const OBJECT2 = new Singleton(2);
console.log(OBJECT1 === OBJECT2); // true
console.log(OBJECT1.id); // 1
console.log(OBJECT2.id); // 1
