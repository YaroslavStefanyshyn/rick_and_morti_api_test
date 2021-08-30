import React from 'react';
import preloader from '../../img/loader.svg';
import s from './Preloader.module.css'

let Preloader = (props) => {
    return (
        <div className={s.preloader}><img src={preloader} alt='preload' /></div>
    )
}

export default Preloader;