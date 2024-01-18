import React, { Fragment } from "react";
import { Row, Col, Card, CardHeader, CardBody, Media, Form, Label, Input } from 'reactstrap'
import { H3, H6, P } from "../../../../AbstractElements";
import { COD, Fast, HorizontalStyle, XYZSeller, ABCSeller, DeliveryOption, BuyingOption, InlineStyletext2, InlineStyletext, mega_horizontald, INR150, INR250, INR100, DefaultText, StarRating5, StarRating1, INR50 } from "../../../../Constant";
import FooterCard from "../Common/FooterCard";

const HorizontalClass = () => {
    return (
        <Fragment>
            <Col sm="12" xl="6" className='box-col-6'>
                <Card className="height-equal">
                    <CardHeader className="pb-0">
                        <H3>{HorizontalStyle}</H3>
                        <span>{InlineStyletext} <code>{mega_horizontald}</code>{InlineStyletext2}</span>
                    </CardHeader>
                    <CardBody>
                        <Form className="mega-horizontal">
                            <Row>
                                <Col sm="3">
                                    <P attrPara={{ className: 'mega-title' }}>{DeliveryOption}</P>
                                </Col>
                                <Col sm="9">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-primary me-3">
                                                <Input id="radio30" type="radio" name="radio1" value="option1" />
                                                <Label for="radio30"></Label>
                                            </div>
                                            <Media body className="flex-grow-1">
                                                <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{COD}<span className="badge badge-primary pull-right digits">{INR50}</span></H6>
                                                <P>{DefaultText}</P>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="9 offset-sm-3">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-secondary me-3">
                                                <Input id="radio31" type="radio" name="radio1" value="option1" />
                                                <Label for="radio31"></Label>
                                            </div>
                                            <Media body className="flex-grow-1">
                                                <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{Fast} <span className="badge badge-secondary pull-right digits">{INR100}</span></H6>
                                                <P>{DefaultText}</P>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="3">
                                    <P attrPara={{ className: 'mega-title' }}>{BuyingOption}</P>
                                </Col>
                                <Col sm="9">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-success me-3">
                                                <Input id="radio32" type="radio" name="radio1" value="option1" />
                                                <Label for="radio32"></Label>
                                            </div>
                                            <Media body className="flex-grow-1">
                                                <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{XYZSeller}<span className="badge badge-success pull-right digits">{INR250}</span></H6>
                                                <P attrPara={{ className: 'rating-star-wrapper' }}><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning m-r-5"></i>{StarRating5}</P>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="9 offset-sm-3">
                                    <div className="card mb-0">
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-info me-3">
                                                <Input id="radio33" type="radio" name="radio1" value="option1" />
                                                <Label for="radio33"></Label>
                                            </div>
                                            <Media body className="flex-grow-1">
                                                <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{ABCSeller}<span className="badge badge-info pull-right digits">{INR150}</span></H6>
                                                <P attrPara={{ className: 'rating-star-wrapper' }}><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star m-r-5"></i>{StarRating1}</P>
                                            </Media>
                                        </Media>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                    <FooterCard footerClass={'text-end'} />
                </Card>
            </Col>
        </Fragment>
    )
}

export default HorizontalClass;