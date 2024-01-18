import React, { Fragment } from 'react';
import { H1, H3, H6,H5 } from '../../../../AbstractElements';
import { Standard, StandardPrice, BussinessPrice, PremiumPrice, ExtraPrice, Purchase, Business, Premium, Extra, } from '../../../../Constant';
import { Btn } from '../../../../AbstractElements';
import { Row, Col, Card, CardBody } from 'reactstrap';

const StandardPricingcard = () => {
    return (
        <Fragment>
            <CardBody>
                <Row className="pricing-content">
                    <Col xl="3 xl-25" sm="6" className="box-col-3">
                        <Card className="pricing-simple text-center">
                            <CardBody>
                                <H3>{Standard}</H3>
                                <H1>{'$15'}</H1>
                                <H6 attrH6={{ className: 'mb-0' }}>{StandardPrice}</H6>
                            </CardBody>
                            <Btn attrBtn={{className:'btn btn-lg btn-block',  color: 'primary' }}><H5 attrH5={{className:'mb-0'}} >{Purchase}</H5></Btn>
                        </Card>
                    </Col>
                    <Col xl="3 xl-25" sm="6" className="box-col-3">
                        <Card className="pricing-simple text-center">
                            <CardBody>
                                <H3>{Business}</H3>
                                <H1>{'$25'}</H1>
                                <H6 attrH6={{ className: 'mb-0' }}>{BussinessPrice}</H6>
                            </CardBody>
                            <Btn attrBtn={{className:'btn btn-lg btn-block', color: 'primary' }}><H5 attrH5={{className:'mb-0'}} >{Purchase}</H5></Btn>
                        </Card>
                    </Col>
                    <Col xl="3 xl-25" sm="6" className="box-col-3">
                        <Card className="pricing-simple text-center">
                            <CardBody>
                                <H3>{Premium}</H3>
                                <H1>{'$35'}</H1>
                                <H6 attrH6={{ className: 'mb-0' }}>{PremiumPrice}</H6>
                            </CardBody>
                            <Btn attrBtn={{className:'btn btn-lg btn-block', color: 'primary' }}><H5 attrH5={{className:'mb-0'}} >{Purchase}</H5></Btn>
                        </Card>
                    </Col>
                    <Col xl="3 xl-25" sm="6" className="box-col-3">
                        <Card className="pricing-simple text-center">
                            <CardBody>
                                <H3>{Extra}</H3>
                                <H1>{'$45'}</H1>
                                <H6 attrH6={{ className: 'mb-0' }}>{ExtraPrice}</H6>
                            </CardBody>
                            <Btn attrBtn={{className:'btn btn-lg btn-block', color: 'primary' }}><H5 attrH5={{className:'mb-0'}} >{Purchase}</H5></Btn>
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </Fragment>
    );
};
export default StandardPricingcard;