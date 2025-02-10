"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CubeB {
    create(top_left_front, bottom_right_back) {
        const now = Date.now();
        if (now > CubeB.last_time + 3000) {
            console.log(`Company B built Cube with dimensions [${top_left_front},${bottom_right_back}]`);
            CubeB.last_time = now;
            return true;
        }
        return false; //busy
    }
}
CubeB.last_time = Date.now();
exports.default = CubeB;
