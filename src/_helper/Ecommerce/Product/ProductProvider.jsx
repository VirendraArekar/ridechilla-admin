import React, { useEffect, useState } from 'react';
import { ProductsApi } from '../../../api';
import Context from './index';
import axios from 'axios';

const ProductProvider = (props) => {
    const [productItem, setProductItem] = useState([]);
    const symbol = '$';
    // eslint-disable-next-line
    const [isVertical, setIsVertical] = useState(false);

    const fetchProducts = async () => {
        try {
            await axios.get(ProductsApi).then((resp) => {
                setProductItem(resp.data);
            });
        } catch (error) {
        }
    };

    const addProductDetail = (data) => {
        if (data) {
            setProductItem(pre => [...pre,
            {
                id: Number(productItem.length) + 1,
                img: data.img ? data.img : 'ecommerce/02.jpg',
                name: data.productname,
                note: data.description,
                discription: "Lorate Solid Men's Fashion Full Sleeves Latest Jacket for Men With Button Closure Long Sleeve Casual Torn Lycra Denim Jacket.",
                discountPrice: Number(data.price) + 75,
                status: 'Sale',
                price: data.price,
                stock: 'In Stock',
                review: '(120 review)',
                rating: Math.ceil((Math.random() * 10) / 2),
                category: data.category,
                colors: [data.color],
                size: [data.size],
                tags: [data.brand]
            }
            ]);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [setProductItem]);

    return (
        <Context.Provider value={{ ...props, productItem, symbol, isVertical, setIsVertical, addProductDetail: addProductDetail }}>
            {props.children}
        </Context.Provider>
    );
};
export default ProductProvider;
