import React, { Fragment } from 'react';
import { Row, Col, Card, CardBody, Media, Form, Label, Input } from 'reactstrap';
import { H6, P } from '../../../../AbstractElements';
import { DefaultStyle, COD, Fast, DefaultStylepara, INR50, INR100, DefaultText } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';
import FooterCard from '../Common/FooterCard';

const DefaultClass = () => {
    return (
        <Fragment>
            <Col sm="12" xl="6" className='box-col-6'>
                <Card>
                    <HeaderCard title={DefaultStyle} span1={DefaultStylepara} />
                    <CardBody className="megaoptions-border-space-sm">
                        <Form className="mega-inline">
                            <Row>
                                <Col sm="6">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-primary me-3">
                                                <Input id="radio14" type="radio" name="radio1" value="option1" />
                                                <Label for="radio14"></Label>
                                            </div>
                                            <Media body className='flex-grow-1'>
                                                <H6 attrH6={{className:'mt-0 mega-title-badge'}}>{COD}<span className="badge badge-primary pull-right digits">{INR50}</span></H6>
                                                <P>{DefaultText}</P>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-secondary me-3">
                                                <Input id="radio13" type="radio" name="radio1" value="option1" />
                                                <Label for="radio13"></Label>
                                            </div>
                                            <Media body className='flex-grow-1'>
                                                <H6 attrH6={{className:'mt-0 mega-title-badge'}}>{Fast}<span className="badge badge-secondary pull-right digits">{INR100}</span></H6>
                                                <P>{DefaultText}</P>
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

export default DefaultClass;