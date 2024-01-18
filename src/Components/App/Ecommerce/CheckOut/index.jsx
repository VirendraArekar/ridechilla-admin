import { H3,Breadcrumbs } from '../../../../AbstractElements';
import { BillingDetails } from '../../../../Constant';
import CheckoutTableData from './CheckoutTableData';
import ProductPlaceOrder from './ProductPlaceOrder';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const CheckOutContain = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="Ecommerce" title="Checkout" mainTitle="Checkout" />
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Card className="checkout">
                            <CardHeader className="pb-0">
                                <H3>{BillingDetails}</H3>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <CheckoutTableData />
                                    <ProductPlaceOrder  />
                                </Row >
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default CheckOutContain;