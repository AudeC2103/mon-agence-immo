import React from 'react';
import s from './style.module.scss';

const SearchBar = ({ onSearch }) => {
    return (
        <div className={s.searchBar}>
            <input
                type="text"
                placeholder="Recherchez une maison, un appartement..."
                className={s.input}
            />
            <button onClick={onSearch} className={s.btn-style}>
                Rechercher
            </button>
        </div>
    );
};

export default SearchBar;
