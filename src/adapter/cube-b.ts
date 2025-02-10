export interface ICubeB {
    create(
        top_left_front: [number, number, number],
        bottom_right_back: [number, number, number]
    ): boolean;
}

export default class CubeB implements ICubeB {
    static last_time = Date.now();

    create(
        top_left_front: [number, number, number],
        bottom_right_back: [number, number, number]
    ): boolean {
        const now = Date.now();
        if (now > CubeB.last_time + 3000) {
            console.log(
                `Company B built Cube with dimensions [${top_left_front},${bottom_right_back}]`
            );
            CubeB.last_time = now;
            return true;
        }
        return false; //busy
    }
}
