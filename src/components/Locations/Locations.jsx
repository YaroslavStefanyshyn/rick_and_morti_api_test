import Pagination from '@material-ui/lab/Pagination';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocations } from '../../redux/Reducers/LocationReducer';
import CustomizedTablesLocations from '../../UI/Table/TableLocations';
import s from './Locations.module.css'
import TableLocationHead from './TableHead/TableLocationHead';

const Locations = (props) => {
    let pagesCount = Math.ceil(props.totalLocationsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const [value, setValue] = useState('');
    const filteredLocations = props.locations.filter(l => {
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
            <TableLocationHead />
            {filteredLocations.map(l => <CustomizedTablesLocations l={l} key={l.id} />)}
            <div className={s.paginator}>
                <Pagination count={pagesCount} variant="outlined" onChange={(event, value) => {
                    if (!filter) {
                        setPage(value);
                        dispatch(getLocations(value))
                    }
                }} />
            </div>
        </div>
    )
}

export default Locations;