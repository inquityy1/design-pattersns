"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Document {
    constructor(name, array) {
        this.name = name;
        this.array = array;
    }
    clone(mode) {
        let array;
        if (mode === 2) {
            array = JSON.parse(JSON.stringify(this.array));
        }
        else {
            array = Object.assign([], this.array);
        }
        return new Document(this.name, array);
    }
}
exports.default = Document;
