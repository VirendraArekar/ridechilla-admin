import React, { Fragment } from "react";
import { Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input } from 'reactstrap'
import { Btn, H3, H4 } from "../../../../AbstractElements";
import { Password, Username, InlineForm, InlineFormWithLabel, InlineFormWithoutLabel, Login, InlineFormspan, forminline, Use } from "../../../../Constant";

const InlineFormClass = () => {
    return (
        <Fragment>
            <Col xl="12">
                <Card>
                    <CardHeader className="pb-0">
                        <H3>{InlineForm}</H3>
                        <span>{Use}<code>{forminline}</code>{InlineFormspan}</span>
                    </CardHeader>
                    <CardBody>
                        <H4>{InlineFormWithLabel}</H4>
                        <Form className="row theme-form mt-3">
                            <Col xxl='4' className="mb-3 d-flex">
                                <Label className="col-form-label pe-2">{Username}</Label>
                                <Input className="form-control" type="text" name="inputUsername" placeholder="Username" autoComplete="off" />
                            </Col>
                            <Col xxl='4' className="mb-3 d-flex">
                                <Label className="col-form-label pe-2">{Password}</Label>
                                <Input className="form-control" type="password" name="inputPassword" placeholder="Password" autoComplete="off" />
                            </Col>
                            <Col xxl='4' className="mb-3 d-flex">
                                <Btn attrBtn={{ color: "primary" }} >{Login}</Btn>
                            </Col>
                        </Form>
                        <H4>{InlineFormWithoutLabel}</H4>
                        <Form className="row row-cols-sm-3 theme-form mt-3 form-bottom">
                            <FormGroup>
                                <Input className="form-control" type="text" name="inputUnlabelUsername" placeholder="Username" autoComplete="off" />
                            </FormGroup>
                            <FormGroup>
                                <Input className="form-control" type="password" name="inputPassword" placeholder="Password" autoComplete="off" />
                            </FormGroup>
                            <FormGroup>
                                <Btn attrBtn={{ color: "secondary" }} >{Login}</Btn>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default InlineFormClass