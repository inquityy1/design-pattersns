// The Facade pattern concept

class SubSystemClassA {
    // A hypothetically comlicated class
    method(): string {
        return 'A';
    }
}

class SubSystemClassB {
    // A hypotetically more comlicated class
    method(value: string): string {
        return value;
    }
}

class SubSystemClassC {
    // A hypotetically even more comlicated class
    method(value: { C: number[] }): { C: number[] } {
        return value;
    }
}

class Facade {
    // A simlified facade offering the service of subsystems
    subSystemClassA(): string {
        return new SubSystemClassA().method();
    }

    subSystemClassB(value: string): string {
        // A simlified facade offering the service of subsystems
        return new SubSystemClassB().method(value);
    }

    subSystemClassC(value: { C: number[] }): { C: number[] } {
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
