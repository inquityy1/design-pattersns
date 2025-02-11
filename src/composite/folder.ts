import IComponent from './icomponent';

export default class Folder implements IComponent {
    // A composite can contain leaves and composites

    referenceToParent?: Folder;
    name: string;
    components: IComponent[];

    constructor(name: string) {
        this.name = name;
        this.components = [];
    }

    dir(indent: string): void {
        console.log(`${indent}<DIR> ${this.name}`);

        this.components.forEach((component) => {
            component.dir(indent + '..');
        });
    }

    attach(component: IComponent): void {
        component.detach();
        component.referenceToParent = this;
        this.components.push(component);
    }

    delete(component: IComponent): void {
        const index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
        }
    }

    detach(): void {
        'Detaching this composite from its parent composite';
        if (this.referenceToParent) {
            this.referenceToParent.delete(this);
            this.referenceToParent = undefined;
        }
    }
}
