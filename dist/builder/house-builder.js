"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const house_1 = require("./house");
class HouseBuilder {
    constructor() {
        this.product = new house_1.default();
    }
    setBuildingType(buildingType) {
        this.product.buildingType = buildingType;
        return this;
    }
    setWallMaterial(wallMaterial) {
        this.product.wallMaterial = wallMaterial;
        return this;
    }
    setNumberDoors(numberDoors) {
        this.product.doors = numberDoors;
        return this;
    }
    setNumberWindows(numberWindows) {
        this.product.windows = numberWindows;
        return this;
    }
    getResult() {
        return this.product;
    }
}
exports.default = HouseBuilder;
