"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const house_builder_1 = require("./house-builder");
class IglooeDirector {
    static construct() {
        return new house_builder_1.default()
            .setBuildingType('Igloo')
            .setWallMaterial('Ice')
            .setNumberDoors(1)
            .getResult();
    }
}
exports.default = IglooeDirector;
