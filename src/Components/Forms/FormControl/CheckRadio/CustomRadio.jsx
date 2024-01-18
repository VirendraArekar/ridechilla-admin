import React, { Fragment } from "react";
import { Row, Col, Card, CardBody, FormGroup, Label, Input } from 'reactstrap'
import {H4 } from "../../../../AbstractElements";
import { CustomRadio, InlineCheckbox, Disabled, Checked, RadioStates, Option } from "../../../../Constant";
import HeaderCard from "../../../Common/Component/HeaderCard";


const CustomRadioClass = () => {
    return (
        <Fragment>
            <Col md="4">
                <Card>
                    <HeaderCard title={CustomRadio} />
                    <CardBody>
                        <Row>
                            <Col sm="12">
                                <H4>{CustomRadio}</H4>
                            </Col>
                            <Col>
                                <FormGroup className="m-t-15">
                                    <div className="form-check radio radio-primary">
                                        <Input className="form-check-input" id="radio1" type="radio" name="radio1" value="option1" defaultChecked />
                                        <Label for="radio1">{Option}<span className="digits"> {"1"}</span></Label>
                                    </div>
                                    <div className="form-check radio radio-primary">
                                        <Input className="form-check-input" id="radio3" type="radio" name="radio1" value="option1" disabled />
                                        <Label for="radio3">{Disabled}</Label>
                                    </div>
                                    <div className="form-check radio radio-primary">
                                        <Input className="form-check-input" id="radio4" type="radio" name="radio1" value="option1" />
                                        <Label for="radio4">{Checked}</Label>
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <H4>{RadioStates}</H4>
                            </Col>
                            <Col>
                                <FormGroup className="m-t-15 custom-radio-ml">
                                    <div className="form-check radio radio-primary">
                                        <Input className="form-check-input" id="radio11" type="radio" name="radio1" value="option1" />
                                        <Label for="radio11">{Option}<span className="digits"> {"1"}</span></Label>
                                    </div>
                                    <div className="form-check radio radio-secondary">
                                        <Input className="form-check-input" id="radio22" type="radio" name="radio1" value="option1" />
                                        <Label for="radio22">{Option}<span className="digits"> {"2"}</span></Label>
                                    </div>
                                    <div className="form-check radio radio-success">
                                        <Input className="form-check-input" id="radio55" type="radio" name="radio1" value="option1" />
                                        <Label for="radio55">{Option}<span className="digits"> {"3"}</span></Label>
                                    </div>
                                    <div className="form-check radio radio-info">
                                        <Input className="form-check-input" id="radio33" type="radio" name="radio1" value="option1" disabled />
                                        <Label for="radio33">{Option}<span className="digits"> {"4"}</span></Label>
                                    </div>
                                    <div className="form-check radio radio-warning">
                                        <Input className="form-check-input" id="radio44" type="radio" name="radio1" value="option1" />
                                        <Label for="radio44">{Option}<span className="digits"> {"5"}</span></Label>
                                    </div>
                                    <div className="form-check radio radio-danger">
                                        <Input className="form-check-input" id="radio66" type="radio" name="radio1" value="option1" defaultChecked />
                                        <Label for="radio66">{Option}<span className="digits"> {"6"}</span></Label>
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <H4>{InlineCheckbox}</H4>
                            </Col>
                            <Col>
                                <FormGroup className="m-t-15 m-checkbox-inline custom-radio-ml m-0">
                                    <div className="form-check form-check-inline radio radio-primary">
                                        <Input id="radioinline1" type="radio" name="radio1" value="option1" />
                                        <Label className="mb-0" for="radioinline1">{Option}<span className="digits"> {"1"}</span></Label>
                                    </div>
                                    <div className="form-check form-check-inline radio radio-primary">
                                        <Input id="radioinline2" type="radio" name="radio1" value="option1" />
                                        <Label className="mb-0" for="radioinline2">{Option}<span className="digits"> {"2"}</span></Label>
                                    </div>
                                    <div className="form-check form-check-inline radio radio-primary">
                                        <Input id="radioinline3" type="radio" name="radio1" value="option1" />
                                        <Label className="mb-0" for="radioinline3">{Option}<span className="digits"> {"3"}</span></Label>
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default CustomRadioClass;