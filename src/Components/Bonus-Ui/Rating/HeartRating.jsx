import React, { Fragment, useState } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Rating from 'react-rating';
import HeaderCard from '../../Common/Component/HeaderCard';
import { HeartRating, YouRated } from '../../../Constant';
import { H6 } from '../../../AbstractElements';

const HeartRatingClass = () => {
    const [heart, setHeart] = useState(0);
    return (
        <Fragment>
            <Col xl="6" lg="12" md="6">
                <Card>
                    <HeaderCard title={HeartRating} />
                    <CardBody>
                        <Row className="rating">
                            <Col sm="8">
                                <Rating
                                    initialRating={heart}
                                    emptySymbol="fa fa-heart-o fa-2x"
                                    fullSymbol="fa fa-heart fa-2x"
                                    onClick={(rate) => setHeart(rate)}
                                >
                                </Rating>
                            </Col>
                            <Col sm="4">
                                <H6 attrH6={{ className: 'mb-0 text-end' }}>{YouRated} : {heart}</H6>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default HeartRatingClass;