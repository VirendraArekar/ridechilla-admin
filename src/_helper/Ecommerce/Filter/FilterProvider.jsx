import Context from './index';
import React, { useState } from 'react';

const FilterProvider = (props) => {
    const [filterSidebar, setFilterSidebar] = useState(true);
    const [value, setValue] = useState({ min: 100, max: 950 });
    const [filter, setFilter] = useState({
        brand: ['Diesel', 'Hudson', 'Lee', 'Spykar'],
        color: '',
        value: value,
        sortBy: '',
        searchBy: '',
        category: ["Women's Jacket", 'Denim Jacket', 'Wonder Woman', 'Roadster', 'Women T-Shirt', "Men's Shirt", "Man's Jacket", "Women's TreckSuit", 'Woman Skirt', "Man's Shirt", 'Woman T-Shirt', "Man's Jeans"]
    });

    const Filtersidebartoggle = () => {
        if (filterSidebar) {
            setFilterSidebar(false);
            document.querySelector('.product-wrapper').classList.add('sidebaron');
        } else {
            setFilterSidebar(true);
            document.querySelector('.product-wrapper').classList.remove('sidebaron');
        }
    };

    const filterCategory = (category) => {
        setFilter((prev) => ({ ...prev, category: category }));
    };

    const filterBrand = (brand) => {
        setFilter((prev) => ({ ...prev, brand: brand }));
    };

    const filterColor = (color) => {
        setFilter((prev) => ({ ...prev, color: color }));
    };

    const filterPrice = (val) => {
        setValue({ min: val[0], max: val[1] });
        setFilter((prev) => ({ ...prev, value: value }));
    };

    const filterSortBy = (sort_bys) => {
        setFilter((prev) => ({ ...prev, sortBy: sort_bys }));
    };

    const filterSearchBy = (search) => {
        setFilter((prev) => ({ ...prev, searchBy: search }));
    };

    return (
        <Context.Provider
            value={{
                ...props,
                filter,
                filterSidebar,
                setFilterSidebar,
                Filtersidebartoggle,
                filterCategory: filterCategory,
                filterBrand: filterBrand,
                filterColor: filterColor,
                filterPrice: filterPrice,
                filterSearchBy: filterSearchBy,
                filterSortBy: filterSortBy,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default FilterProvider;
