import React, { useState } from 'react';
import s from './Characters.module.css';
import MediaCard from '../../UI/Card/Card'
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch } from 'react-redux';
import { fetchCharactersFromPage, fetchCharactersFromPageWithFilter, getCharactersThunkCreator, getCharactersThunkCreatorWithFilter } from '../../redux/Reducers/CharactersReducer';
import SelectFilter from '../../UI/Selector/Selector';

let Characters = (props) => {
    let pagesCount = Math.ceil(props.totalCharactersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('');
    function getTheFilter(text) {
        setFilter(text);
        setPage(1);
        if (text) {
            dispatch(getCharactersThunkCreatorWithFilter(text))
        } else {
            dispatch(getCharactersThunkCreator())
        }
    }

    return (
        <div>
            <div className='selector'>
                <SelectFilter getTheFilter={getTheFilter} />
            </div>
            <div className={s.characters}>
                {
                    props.characters.map(c => <MediaCard c={c} key={c.id} />)
                }
            </div>
            <div className={s.paginator}>
                <Pagination count={pagesCount} variant="outlined" onChange={(event, value) => {
                    if (!filter) {
                        setPage(value);
                        dispatch(fetchCharactersFromPage(value));
                    } else {
                        setPage(value);
                        dispatch(fetchCharactersFromPageWithFilter(filter, value))
                    }
                }} />
            </div>
        </div>
    )
}

export default Characters;