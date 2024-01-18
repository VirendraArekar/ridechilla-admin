import React, { Fragment } from 'react';
import { Btn } from '../../../../AbstractElements';
import { DebitCard, ExpirationDate, SelectMonth, SelectYear, Submit } from '../../../../Constant';
import { Card, CardBody, Col, FormGroup, Input, Row, Label } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';

const DebitCards = () => {
    return (
        <Fragment>
            <Col lg="6" xl="4" className="debit-card box-col-5">
                <Card>
                    <HeaderCard title={DebitCard} />
                    <CardBody>
                        <Row className="theme-form e-commerce-form">
                            <FormGroup className="mb-3 col-6 p-r-0">
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Full name here"
                                />
                            </FormGroup>
                            <FormGroup className="mb-3 col-6">
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Card number"
                                />
                            </FormGroup>
                            <FormGroup className="mb-3 col-6 p-r-0">
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="CVV number"
                                />
                            </FormGroup>
                            <FormGroup className="mb-3 col-6">
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="CVC"
                                />
                            </FormGroup>
                            <div className="col-12">
                                <Label className="col-form-label p-b-20">
                                    {ExpirationDate}
                                </Label>
                            </div>
                            <FormGroup className="mb-3 col-6 p-r-0">
                                <select className="form-select" size="1">
                                    {SelectMonth.map((months, i) =>
                                        <option key={i} value={months}>{months}</option>
                                    )}
                                </select>
                            </FormGroup>
                            <FormGroup className="mb-3 col-6">
                                <select className="form-select" size="1">
                                    {SelectYear.map((years, i) =>
                                        <option key={i} value={years}>{years}</option>
                                    )}
                                </select>
                            </FormGroup>
                            <div className="col-12">
                                <Btn attrBtn={{ color: 'primary', className: 'btn btn-primary btn-block' }}>
                                    {Submit}
                                </Btn>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default DebitCards;