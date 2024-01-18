import { H6, LI, UL } from '../../../../AbstractElements';
import { Brand, Colors, Price } from '../../../../Constant';
import { getBrands, getColors, getGender } from '../../../../Services/Ecommerce.service';
import FilterContext from '../../../../_helper/Ecommerce/Filter';
import ProductContext from '../../../../_helper/Ecommerce/Product';
import { Input, Label } from 'reactstrap';
import React, { Fragment, useContext, useState } from 'react';
import Rangeslider from './Rangeslider';

const Category = () => {
    const { productItem } = useContext(ProductContext);
    const [values, setValues] = useState([80, 950]);
    const { filter, filterColor, filterCategory, filterBrand, filterPrice } = useContext(FilterContext);
    const colors = getColors(productItem);
    const colorHandle = (event, color) => {
        var elems = document.querySelectorAll('.color-selector ul li');
        [].forEach.call(elems, function (el) {
            el.classList.remove('active');
        });
        event.target.classList.add('active');
        filterColor(color);
    };
    const brands = getBrands(productItem);
    const gender = getGender(productItem);
    const clickBrandHendle = (event, brands) => {
        var index = brands.indexOf(event.target.value);
        if (event.target.checked === true)
            brands.push(event.target.value);
        else
            brands.splice(index, 1);
        filterBrand(brands);
    };
    const ClickCategory = (event, category) => {
        var index = category.indexOf(event.target.value);
        if (event.target.checked === true)
            category.push(event.target.value);
        else
            category.splice(index, 1);
        filterCategory(category);
    };
    const priceHandle = (value) => {
        setValues(value);
        filterPrice(value);
    };
    return (
        <Fragment>
            <div className="product-filter">
                <H6 className="f-w-600">Category</H6>
                <div className="checkbox-animated mt-0" >
                    {gender.map((item, i) => {
                        return (
                            <Label className="d-block" key={i}>
                                <Input className="checkbox_animated" type="checkbox" name="name" value={item} onClick={(e) => ClickCategory(e, filter.category)}
                                    defaultChecked={filter.category.includes(item) ? true : false} />{item}
                            </Label>
                        );
                    })}
                </div>
            </div>
            <div className="product-filter">
                <H6 attrH6={{ className: 'f-w-600' }}>{Brand}</H6>
                <div className="checkbox-animated mt-0">
                    {brands.map((brand, index) => {
                        return (
                            <Label className="checkfilter" key={index}>
                                <Input className="checkbox_animated" onClick={(e) => clickBrandHendle(e, filter.brand)}
                                    value={brand} defaultChecked={filter.brand.includes(brand) ? true : false} id={brand} type="checkbox" />
                                {brand}
                            </Label>
                        );
                    })}
                </div>
            </div>
            <div className="product-filter slider-product">
                <H6 attrH6={{ className: 'f-w-600' }}>{Colors}</H6>
                <div className="color-selector">
                    <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
                        {colors.map((color, i) => {
                            return (
                                <Fragment key={i}><LI attrLI={{ className: color, title: color, onClick: e => colorHandle(e, color) }}></LI> &nbsp;</Fragment>
                            );
                        })}
                    </UL>
                </div >
            </div >
            <div className="product-filter range-slider pb-0">
                <H6 attrH6={{ className: 'f-w-600' }}>{Price}</H6>
                <Rangeslider priceHandle={priceHandle} values={values} />
            </div>
        </Fragment >
    );
};

export default Category;