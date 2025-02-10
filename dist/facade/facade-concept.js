"use strict";
// The Facade pattern concept
class SubSystemClassA {
    // A hypothetically comlicated class
    method() {
        return 'A';
    }
}
class SubSystemClassB {
    // A hypotetically more comlicated class
    method(value) {
        return value;
    }
}
class SubSystemClassC {
    // A hypotetically even more comlicated class
    method(value) {
        return value;
    }
}
class Facade {
    // A simlified facade offering the service of subsystems
    subSystemClassA() {
        return new SubSystemClassA().method();
    }
    subSystemClassB(value) {
        // A simlified facade offering the service of subsystems
        return new SubSystemClassB().method(value);
    }
    subSystemClassC(value) {
        // A simlified facade offering the service of subsystems
        return new SubSystemClassC().method(value);
    }
}
// The Client
// Calling potentially complicated subsystems directrly
console.log(new SubSystemClassA().method());
console.log(new SubSystemClassB().method('B'));
console.log(new SubSystemClassC().method({ C: [1, 2, 3] }));
// or using the simplified facade instead
const FACADE = new Facade();
console.log(FACADE.subSystemClassA());
console.log(FACADE.subSystemClassB('B'));
console.log(FACADE.subSystemClassC({ C: [1, 2, 3] }));
