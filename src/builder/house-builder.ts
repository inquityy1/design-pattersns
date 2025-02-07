import House from './house';

interface IBuilder {
    setBuildingType(buildingType: string): this;
    setWallMaterial(wallMaterial: string): this;
    setNumberDoors(doors: number): this;
    setNumberWindows(windows: number): this;
    getResult(): House;
}

export default class HouseBuilder implements IBuilder {
    product: House;

    constructor() {
        this.product = new House();
    }

    setBuildingType(buildingType: string) {
        this.product.buildingType = buildingType;
        return this;
    }

    setWallMaterial(wallMaterial: string) {
        this.product.wallMaterial = wallMaterial;
        return this;
    }

    setNumberDoors(numberDoors: number) {
        this.product.doors = numberDoors;
        return this;
    }

    setNumberWindows(numberWindows: number) {
        this.product.windows = numberWindows;
        return this;
    }

    getResult() {
        return this.product;
    }
}
