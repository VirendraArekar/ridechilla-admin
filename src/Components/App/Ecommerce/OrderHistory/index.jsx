import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import OrderTableData from './OrderTableData';
import { Col, Container, Row } from 'reactstrap';

const OrderHistoryContain = () => {
    return (
        <Fragment>
            <Breadcrumbs title="Order History" mainTitle="Order History" parent="E-Commerce" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <OrderTableData />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default OrderHistoryContain;