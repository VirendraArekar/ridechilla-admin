import React, { Fragment } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { H3 } from '../../../../AbstractElements';
import { Email, Password, Website, HorizontalFormLayout, Option, ContactNumber, CompanyName, Checkboxes, Radios, Disabled, Usingthe, card, BasicAccordiontext } from '../../../../Constant';
import FooterCard from '../../FormControl/Common/FooterCard';

const HorizontalFormLayoutClass = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader className='pb-0'>
                        <H3>{HorizontalFormLayout}</H3>
                        <span>{Usingthe} <code>{card}</code> {BasicAccordiontext}</span>
                    </CardHeader>
                    <CardBody>
                        <Form className="theme-form">
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">{Email}</Label>
                                <Col sm="9">
                                    <Input className="form-control" type="email" placeholder="Email" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputPassword3">{Password}</Label>
                                <Col sm="9">
                                    <Input className="form-control" type="password" placeholder="Password" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputPassword3">{ContactNumber}</Label>
                                <Col sm="9">
                                    <Input className="form-control" type="number" placeholder="Contact" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputPassword3">{CompanyName}</Label>
                                <Col sm="9">
                                    <Input className="form-control" type="text" placeholder="Company name" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label">{Website}</Label>
                                <Col sm="9">
                                    <Input className="form-control" type="url" placeholder="Website" />
                                </Col>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <Row>
                                    <Label className="col-form-label col-sm-3 pt-0">{Radios}</Label>
                                    <Col sm="9">
                                        <div className="form-check radio radio-primary">
                                            <Input type="radio" name="radio1" id="radio1" value="option1" />
                                            <Label for="radio1">{Option} {'1'}</Label>
                                        </div>
                                        <div className="form-check radio radio-primary">
                                            <Input type="radio" name="radio1" id="radio2" value="option1" />
                                            <Label for="radio2">{Option} {'2'}</Label>
                                        </div>
                                        <div className="form-check radio radio-primary">
                                            <Input type="radio" name="radio1" value="option1" disabled />
                                            <Label>{Disabled}</Label>
                                        </div>
                                        <div className="form-check radio radio-primary">
                                            <Input type="radio" name="radio1" value="option1" />
                                            <Label>{Option} {'3'}</Label>
                                        </div>
                                        <div className="form-check radio radio-primary">
                                            <Input type="radio" name="radio1" id="radio3" value="option1" defaultChecked/>
                                            <Label for="radio3">{Option} {'4'}</Label>
                                        </div>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Row className="mb-0">
                                <Label className="col-sm-3 col-form-label pb-0">{Checkboxes}</Label>
                                <Col sm="9">
                                    <div className="mb-0">
                                        <div className="form-check form-check-inline checkbox checkbox-primary">
                                            <Input id="inline-form-1" type="checkbox" />
                                            <Label htmlFor="inline-form-1">{Option} 1</Label>
                                        </div>
                                        <div className="form-check form-check-inline checkbox checkbox-primary">
                                            <Input id="inline-form-2" type="checkbox" />
                                            <Label htmlFor="inline-form-2">{Option} 2</Label>
                                        </div>
                                    </div>
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

export default HorizontalFormLayoutClass;