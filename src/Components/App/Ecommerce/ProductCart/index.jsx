import CartData from './CartData';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { CartTitle } from '../../../../Constant';
import { H3,Breadcrumbs } from '../../../../AbstractElements';

const ProductCartConatain = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="Ecommerce" title="Cart" mainTitle="Cart" />            
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="pb-0">
                                <H3>{CartTitle}</H3>
                            </CardHeader>
                            <CardBody>
                                <CartData />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default ProductCartConatain;