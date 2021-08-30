import Pagination from '@material-ui/lab/Pagination';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getEpisodes } from '../../redux/Reducers/EpisodesReducer';
import CustomizedTables from '../../UI/Table/Table';
import s from './Episodes.module.css';
import TableEpisodeHead from './TableHead/TableEpisodeHead';

const Episodes = (props) => {
    let pagesCount = Math.ceil(props.totalEpisodesCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const [value, setValue] = useState('');
    const filteredEpisodes = props.episodes.filter(l => {
        return l.name.toLowerCase().includes(value.toLowerCase())
    })
    return (
        <div>
            <div className={s.form}>
                <form className={s.searchForm}>
                    <input
                        type="text"
                        placeholder="Search the location..."
                        onChange={(event) => setValue(event.target.value)} />
                </form>
            </div>
            <TableEpisodeHead />
            <div> {
                filteredEpisodes.map(ep => <CustomizedTables ep={ep} key={ep.id} />)
            }</div>

            <div className={s.paginator}>
                <Pagination count={pagesCount} variant="outlined" onChange={(event, value) => {
                    if (!filter) {
                        setPage(value);
                        dispatch(getEpisodes(value))
                    }
                }} />
            </div>
        </div>
    )
}


export default Episodes;