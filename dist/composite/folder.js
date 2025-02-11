"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Folder {
    constructor(name) {
        this.name = name;
        this.components = [];
    }
    dir(indent) {
        console.log(`${indent}<DIR> ${this.name}`);
        this.components.forEach((component) => {
            component.dir(indent + '..');
        });
    }
    attach(component) {
        component.detach();
        component.referenceToParent = this;
        this.components.push(component);
    }
    delete(component) {
        const index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
        }
    }
    detach() {
        'Detaching this composite from its parent composite';
        if (this.referenceToParent) {
            this.referenceToParent.delete(this);
            this.referenceToParent = undefined;
        }
    }
}
exports.default = Folder;
