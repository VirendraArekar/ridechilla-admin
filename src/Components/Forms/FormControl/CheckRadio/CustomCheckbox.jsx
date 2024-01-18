import React, { Fragment } from "react";
import { Row, Col, Card, CardBody, FormGroup, Label, Input } from 'reactstrap'
import { H4 } from "../../../../AbstractElements";
import { Default, Disabled, Checked, Option, CustomCheckbox, CheckboxStates, InlineCheckbox, SuccessState, BrandState, PrimaryState, InfoState } from "../../../../Constant";
import HeaderCard from "../../../Common/Component/HeaderCard";


const CustomCheckboxClass = () => {
    return (
        <Fragment>
            <Col md="4">
                <Card>
                    <HeaderCard title={CustomCheckbox} />
                    <CardBody>
                        <Row>
                            <Col sm="12">
                                <H4 attrH4={{className:'mb-0'}}>{CustomCheckbox}</H4>
                            </Col>
                            <Col>
                                <FormGroup className="m-t-15">
                                    <div className="checkbox mb-0">
                                        <Input id="checkbox1" type="checkbox" />
                                        <Label for="checkbox1">{Default}</Label>
                                    </div>
                                    <div className="checkbox mb-0">
                                        <Input id="checkbox2" type="checkbox" disabled />
                                        <Label for="checkbox2">{Disabled}</Label>
                                    </div>
                                    <div className="checkbox mb-0">
                                        <Input id="checkbox3" type="checkbox" defaultChecked />
                                        <Label for="checkbox3">{Checked}</Label>
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <H4 attrH4={{className:'mb-0'}}>{CheckboxStates}</H4>
                            </Col>
                            <Col>
                                <FormGroup className="m-t-15">
                                    <div className="form-check checkbox checkbox-primary mb-0">
                                        <Input id="checkbox-primary-1" type="checkbox" />
                                        <Label for="checkbox-primary-1">{SuccessState}</Label>
                                    </div>
                                    <div className="form-check checkbox checkbox-secondary mb-0">
                                        <Input id="checkbox-dark" type="checkbox" disabled />
                                        <Label for="checkbox-dark">{BrandState}</Label>
                                    </div>
                                    <div className="form-check checkbox checkbox-success mb-0">
                                        <Input id="checkbox-primary" type="checkbox" />
                                        <Label for="checkbox-primary">{PrimaryState}</Label>
                                    </div>
                                    <div className="form-check checkbox checkbox-info mb-0">
                                        <Input id="checkbox-info" type="checkbox" />
                                        <Label for="checkbox-info">{InfoState}</Label>
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <H4 attrH4={{className:'mb-0'}}>{InlineCheckbox}</H4>
                            </Col>
                            <Col>
                                <FormGroup className="m-t-15 m-checkbox-inline m-0">
                                    <div className="form-check form-check-inline checkbox checkbox-dark mb-0">
                                        <Input id="inline-1" type="checkbox" />
                                        <Label for="inline-1">{Option}<span className="digits"> {"1"}</span></Label>
                                    </div>
                                    <div className="form-check form-check-inline checkbox checkbox-dark mb-0">  
                                        <Input id="inline-2" type="checkbox" />
                                        <Label for="inline-2">{Option}<span className="digits"> {"2"}</span></Label>
                                    </div>
                                    <div className="form-check form-check-inline checkbox checkbox-dark mb-0">
                                        <Input id="inline-3" type="checkbox" />
                                        <Label for="inline-3">{Option}<span className="digits"> {"3"}</span></Label>
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

export default CustomCheckboxClass;