import React from 'react';
import s from './TableEpisodeHead.module.css';

const TableEpisodeHead = () => {
    return (
        <table className={s.table}>
            <tr>
                <th className={s.th1}>Name</th>
                <th className={s.th2}>Air Date</th>
                <th className={s.th3}>Episode</th>
            </tr>
        </table>
    )
};

export default TableEpisodeHead;