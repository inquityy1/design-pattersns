"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cube_a_1 = require("./cube-a");
const cube_b_adapter_1 = require("./cube-b-adapter");
const totalCubes = 5;
let counter = 0;
const manufatureCube = () => {
    const width = Math.floor(Math.random() * 10) + 1;
    const height = Math.floor(Math.random() * 10) + 1;
    const depth = Math.floor(Math.random() * 10) + 1;
    let cube = new cube_a_1.default();
    let success = cube.manufacture(width, height, depth);
    if (success) {
        counter = counter + 1;
    }
    else {
        console.log('Company A was busy, so trying company B');
        cube = new cube_b_adapter_1.default();
        success = cube.manufacture(width, height, depth);
        if (success) {
            counter = counter + 1;
        }
        else {
            console.log('Company B was also busy, so trying company A');
        }
    }
};
// wait some time between manufacturing each cube
const interval = setInterval(() => {
    manufatureCube();
    if (counter >= totalCubes) {
        clearInterval(interval);
        console.log(`${totalCubes} cubes have been manufactured`);
    }
}, 1000);
