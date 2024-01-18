import React, { Fragment } from "react";
import { Col, Card, CardBody, Form, FormGroup, Label, Input, InputGroup, InputGroupText, Row } from 'reactstrap'
import { Btn } from "../../../../AbstractElements";
import { FirstName, LastName, Username, State, City, BrowserDefaults, Zip, SubmitForm, SupportText, SupportText2, TermsText } from '../../../../Constant';
import HeaderCard from "../../../Common/Component/HeaderCard";

const BrowserDefaultsClass = () => {
    return (
        <Fragment>
            <Card>
                <HeaderCard span1={SupportText} span2={SupportText2} title={BrowserDefaults} />
                <CardBody>
                    <Form>
                        <Row className="g-3">
                            <Col md="4 mb-3">
                                <Label htmlFor="validationDefault01">{FirstName}</Label>
                                <Input className="form-control" type="text" placeholder="First name" required />
                            </Col>
                            <Col md="4 mb-3">
                                <Label htmlFor="validationDefault02">{LastName}</Label>
                                <Input className="form-control" type="text" placeholder="Last name" required />
                            </Col>
                            <Col md="4 mb-3">
                                <Label htmlFor="validationDefaultUsername">{Username}</Label>
                                <InputGroup>
                                    <InputGroupText>{"@"}</InputGroupText>
                                    <Input className="form-control" type="text" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="g-3">
                            <Col md="6 mb-3">
                                <Label>{City}</Label>
                                <Input className="form-control" type="text" placeholder="City" required />
                            </Col>
                            <Col md="3 mb-3">
                                <Label>{State}</Label>
                                <Input className="form-control" type="text" placeholder="State" required />
                            </Col>
                            <Col md="3 mb-3">
                                <Label>{Zip}</Label>
                                <Input className="form-control" type="text" placeholder="Zip" required />
                            </Col>
                        </Row>
                        <FormGroup>
                            <div className="form-check">
                                <div className="checkbox p-0">
                                    <Input className="form-check-input" id="invalidCheck2" type="checkbox" required />
                                    <Label className="form-check-label" htmlFor="invalidCheck2">{TermsText}</Label>
                                </div>
                            </div>
                        </FormGroup>
                        <Btn attrBtn={{ color: "primary" }} >{SubmitForm}</Btn>
                    </Form>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default BrowserDefaultsClass;