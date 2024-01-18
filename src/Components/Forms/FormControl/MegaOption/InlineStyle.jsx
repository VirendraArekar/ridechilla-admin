import React, { Fragment } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Media, Form, Label, Input } from 'reactstrap';
import { H3, H6, P } from '../../../../AbstractElements';
import { COD, Fast, InlineStyle, Free, Local, Standard, InlineStyletext, mega_inlined, InlineStyletext2, INR50, EstimatedTime1, EstimatedTime2, EstimatedTime3, INR80, INR100 } from '../../../../Constant';
import FooterCard from '../Common/FooterCard';

const InlineClass = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H3>{InlineStyle}</H3>
                        <span>{InlineStyletext} <code>{mega_inlined}</code> {InlineStyletext2}</span>
                    </CardHeader>
                    <CardBody className="megaoptions-border-space-sm">
                        <Form className="mega-inline">
                            <Row>
                                <Col sm="6">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-primary me-3">
                                                <Input id="radio19" type="radio" name="radio1" value="option1" />
                                                <Label for="radio19"></Label>
                                            </div>
                                            <Media body className='flex-grow-1'>
                                                <H6 attrH6={{className:"mt-0 mega-title-badge"}}>{COD}<span className="badge badge-primary pull-right digits">{INR50}</span></H6>
                                                <p>{EstimatedTime1}</p>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-secondary me-3">
                                                <Input id="radio20" type="radio" name="radio1" value="option1" />
                                                <Label for="radio20"></Label>
                                            </div>
                                            <Media body className='flex-grow-1'>
                                                <H6 attrH6={{ className: 'mt-0 mega-title-badge' }} >{Fast}<span className="badge badge-secondary pull-right digits">{INR100}</span></H6>
                                                <P>{EstimatedTime2}</P>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-secondary me-3">
                                                <Input id="radio21" type="radio" name="radio1" value="option1" />
                                                <Label for="radio21"></Label>
                                            </div>
                                            <Media body className='flex-grow-1'>
                                                <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{Standard}<span className="badge badge-secondary pull-right digits">{INR80}</span></H6>
                                                <P>{EstimatedTime2}</P>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-primary me-3">
                                                <Input id="radio22" type="radio" name="radio1" value="option1" />
                                                <Label for="radio22"></Label>
                                            </div>
                                            <Media body className='flex-grow-1'>
                                                <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{Local} <span className="badge badge-primary pull-right digits">{Free}</span></H6>
                                                <P>{EstimatedTime3}</P>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                    <FooterCard footerClass={'text-end'} />
                </Card>
            </Col>
        </Fragment>
    );
};

export default InlineClass;