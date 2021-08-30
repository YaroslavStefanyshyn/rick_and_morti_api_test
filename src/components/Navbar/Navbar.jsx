import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import up from '../../img/up.png';

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.item}>
                <NavLink to='/characters' activeClassName={s.activeLink}>Characters</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/episodes' activeClassName={s.activeLink}>Episodes</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/locations' activeClassName={s.activeLink}>Locations</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/myWatchList' activeClassName={s.activeLink}>My Watch List</NavLink>
            </div>
            <div className={s.img}>
                <NavLink to='/'><img src={up} alt='up' /> </NavLink>
            </div>
        </div>
    )
}

export default Navbar;