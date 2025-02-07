"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const small_table_1 = require("./small-table");
const medium_table_1 = require("./medium-table");
const big_table_1 = require("./big-table");
class TableFactory {
    static getTable(chair) {
        if (chair === 'BigTable') {
            return new big_table_1.default();
        }
        else if (chair === 'MediumTable') {
            return new medium_table_1.default();
        }
        else {
            return new small_table_1.default();
        }
    }
}
exports.default = TableFactory;
