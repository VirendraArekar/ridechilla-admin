import React, { Fragment } from 'react';
import { H3,Breadcrumbs } from '../../../../AbstractElements';
import { WishlistTitle } from '../../../../Constant';
import WishListData from './WishListData';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

const WishListContain = () => {
    return (
        <Fragment>
            <Breadcrumbs title="Wishlist" mainTitle="Wishlist" parent="Ecommerce" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className='pb-0'>
                                <H3>{WishlistTitle}</H3>
                            </CardHeader>
                            <CardBody className='whishlist-main'>
                                    <WishListData />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </Fragment>
    );
};
export default WishListContain;