import { dimension } from './dimension';

// A Chair Interface
interface ITable {
    name: string;
    height: number;
    width: number;
    depth: number;
    getDimensions(): dimension;
}

// The Chair Base Class
export default class Table implements ITable {
    name = '';
    height = 0;
    width = 0;
    depth = 0;

    // createObject(): IChair {
    //     return this;
    // }

    getDimensions(): dimension {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        };
    }
}
