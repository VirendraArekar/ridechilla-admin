import React, { Fragment } from "react";
import { Row, Col, Card, CardHeader, CardBody, Media, Form, Label, Input } from 'reactstrap'
import { H3, H6, P } from "../../../../AbstractElements";
import { COD, Fast, Free, VerticalStyle, Local, XYZSeller, ABCSeller, Standard, DeliveryOption, BuyingOption, VerticalStyleText, megaverticald, InlineStyletext2, INR50, INR100, INR80, EstimatedTime1, EstimatedTime4, INR150, StarRating1, StarRating5 } from "../../../../Constant";
import FooterCard from "../Common/FooterCard";

const VerticalClass = () => {
    return (
        <Fragment>
            <Col sm="12" xl="6" className='box-col-6'>
                <div className="card height-equal">
                    <CardHeader className="pb-0">
                        <H3>{VerticalStyle}</H3>
                        <span>{VerticalStyleText} <code>{megaverticald}</code> {InlineStyletext2}</span>
                    </CardHeader>
                    <CardBody>
                        <Form className="mega-vertical">
                            <Row>
                                <Col sm="12">
                                    <P attrPara={{ className: "mega-title m-b-5" }} >{DeliveryOption}</P>
                                </Col>
                                <Col sm="6">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-primary me-3">
                                                <Input id="radio23" type="radio" name="radio1" value="option1" />
                                                <Label for="radio23"></Label>
                                            </div>
                                            <Media body className="flex-grow-1">
                                                <H6 attrH6={{ className: "mt-0 mega-title-badge" }} >{COD}<span className="badge badge-primary pull-right digits">{INR50}</span></H6>
                                                <P>{EstimatedTime1}</P>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-secondary me-3">
                                                <Input id="radio24" type="radio" name="radio1" value="option1" />
                                                <Label for="radio24"></Label>
                                            </div>
                                            <Media body className="flex-grow-1">
                                                <H6 attrH6={{ className: "mt-0 mega-title-badge" }}>{Fast} <span className="badge badge-secondary pull-right digits">{INR100}</span></H6>
                                                <P>{EstimatedTime1}</P>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-success me-3">
                                                <Input id="radio25" type="radio" name="radio1" value="option1" />
                                                <Label for="radio25"></Label>
                                            </div>
                                            <Media body className="flex-grow-1">
                                                <H6 attrH6={{ className: "mt-0 mega-title-badge" }} >{Standard} <span className="badge badge-success pull-right digits">{INR80}</span></H6>
                                                <P>{EstimatedTime4}</P>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-info me-3">
                                                <Input id="radio5" type="radio" name="radio1" value="option1" />
                                                <Label for="radio5"></Label>
                                            </div>
                                            <Media body className="flex-grow-1">
                                                <H6 attrH6={{ className: "mt-0 mega-title-badge" }} >{Local} <span className="badge badge-info pull-right digits">{Free}</span></H6>
                                                <P>{EstimatedTime4}</P>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="12">
                                    <P attrPara={{className:'mega-title m-b-5'}}>{BuyingOption}</P>
                                </Col>
                                <Col sm="6">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-warning me-3">
                                                <Input id="radio26" type="radio" name="radio1" value="option1" />
                                                <Label for="radio26"></Label>
                                            </div>
                                            <Media body className="flex-grow-1">
                                                <H6 attrH6={{ className: "mt-0 mega-title-badge" }} >{XYZSeller}<span className="badge badge-warning pull-right digits">{"250 INR"}</span></H6>
                                                <P attrPara={{ className: "rating-star-wrapper" }} ><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning m-r-5"></i>{StarRating5}</P>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card>
                                        <Media className="d-flex p-20">
                                            <div className="form-check radio radio-danger me-3">
                                                <Input id="radio27" type="radio" name="radio1" value="option1" />
                                                <Label for="radio27"></Label>
                                            </div>
                                            <Media body className="flex-grow-1">
                                                <H6 attrH6={{ className: "mt-0 mega-title-badge" }} >{ABCSeller}<span className="badge badge-danger pull-right digits">{INR150}</span></H6>                                                
                                                <P attrPara={{ className: "rating-star-wrapper" }} ><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star m-r-5"></i>{StarRating1}</P>
                                            </Media>
                                        </Media>
                                    </Card>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                    <FooterCard footerClass={'text-end'} />
                </div>
            </Col>
        </Fragment>
    )
}

export default VerticalClass;