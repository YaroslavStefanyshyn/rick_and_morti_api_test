import React from 'react';
import s from './TableLocationsHead.module.css';

const TableLocationHead = () => {
    return (
        <table className={s.table}>
            <tr>
                <th className={s.th1}>Name</th>
                <th className={s.th2}>Type</th>
                <th className={s.th3}>Dimension</th>
            </tr>
        </table>
    )
};

export default TableLocationHead;