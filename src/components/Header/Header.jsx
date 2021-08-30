import React from 'react';
import s from './Header.module.css';
import HeaderImg from '../../img/HeaderImg.jpg';
import HeaderImg2 from '../../img/HeaderImg2.jpg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.img}>
                <NavLink to='/' >
                    <img src={HeaderImg} alt="HeaderImg" />
                    <span className={s.span}>Rick and Morty</span>
                    <img src={HeaderImg2} alt="HeaderImg2" />
                </NavLink>
            </div>
        </div>
    )
}

export default Header;