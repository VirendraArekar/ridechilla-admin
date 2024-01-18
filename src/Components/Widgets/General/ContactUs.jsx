import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Input, Label } from "reactstrap";
import { Contact, Email, Message, SEND_IT, YourName } from "../../../Constant";
import { H3 } from "../../../AbstractElements";
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <Fragment>
            <Col sm="12" lg="6" xl="8" md="12" className="xl-50 box-col-6">
                <Card>
                    <CardHeader>
                        <H3>{Contact} Us</H3>
                    </CardHeader>
                    <CardBody className="contact-form">
                        <form className="theme-form">
                            <div className="form-icon">
                                <i className="icofont icofont-envelope-open"></i></div>
                            <div className="mb-3">
                                <Label htmlFor="exampleInputName">{YourName}</Label>
                                <Input className="form-control" id="exampleInputName" type="text" placeholder="John Dio" />
                            </div>
                            <div className="mb-3">
                                <Label className="col-form-label" htmlFor="exampleInputEmail1">{Email}</Label>
                                <Input className="form-control" id="exampleInputEmail1" type="email" placeholder="Demo@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <Label className="col-form-label" htmlFor="exampleInputEmail1">{Message}</Label>
                                <textarea className="form-control textarea" rows="3" cols="50" placeholder="Your Message"></textarea>
                            </div>
                            <div className="text-sm-end">
                            <Link to={`${process.env.PUBLIC_URL}/app/contact`} className="btn btn-primary">{SEND_IT}</Link>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default ContactUs;