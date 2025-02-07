"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The Chair Base Class
class Table {
    constructor() {
        this.name = '';
        this.height = 0;
        this.width = 0;
        this.depth = 0;
    }
    // createObject(): IChair {
    //     return this;
    // }
    getDimensions() {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        };
    }
}
exports.default = Table;
