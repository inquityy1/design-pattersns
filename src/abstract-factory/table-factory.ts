import SmallTable from './small-table';
import MediumTable from './medium-table';
import BigTable from './big-table';
import ITable from './table';

export default class TableFactory {
    static getTable(chair: string): ITable {
        if (chair === 'BigTable') {
            return new BigTable();
        } else if (chair === 'MediumTable') {
            return new MediumTable();
        } else {
            return new SmallTable();
        }
    }
}
