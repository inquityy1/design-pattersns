import House from './house';
import HouseBuilder from './house-builder';

export default class IglooeDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType('Igloo')
            .setWallMaterial('Ice')
            .setNumberDoors(1)
            .getResult();
    }
}
