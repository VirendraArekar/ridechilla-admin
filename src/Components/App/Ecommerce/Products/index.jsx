import { Breadcrumbs } from '../../../../AbstractElements';
import ProductFeatures from './ProductFeatures';
import ProductGrid from './ProductGrid';
import React from 'react';
import { Fragment } from 'react';
import { Container } from 'reactstrap';

const ProductContain = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="Ecommerce" title="Product" mainTitle="Product" />
            <Container fluid={true} className="product-wrapper">
                <div className="product-grid">
                    <ProductFeatures />
                    <ProductGrid />
                </div>
            </Container>
        </Fragment>
    );
};
export default ProductContain;