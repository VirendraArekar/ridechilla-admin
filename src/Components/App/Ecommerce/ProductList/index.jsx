import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../Constant';
import ProductTableData from './ProductTableData';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';

const ProductListContain = () => {
    return (
        <Fragment>
            <Breadcrumbs title="Product List" mainTitle="Product List" parent="E-Commerce" />
            <Container fluid={true} className='list-products'>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title={ProductListTitle} span1={ProductListDesc} />
                            <CardBody>
                                <ProductTableData />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default ProductListContain;