import React, { Fragment } from 'react';
import { Col, Card, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { H4 } from '../../../../AbstractElements';
import { EmailAddress, Website, BillingInformation, CompanyInformation, MegaForm, AccountInformation, ContactNumber, CompanyName, YourName } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';
import FooterCard from '../../FormControl/Common/FooterCard';

const MegaFormClass = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <HeaderCard title={MegaForm} />
                    <CardBody>
                        <Form className="theme-form mega-form">
                            <H4>{AccountInformation}</H4>
                            <FormGroup>
                                <Label className="col-form-label">{YourName}</Label>
                                <Input className="form-control" type="text" placeholder="your Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label className="col-form-label">{EmailAddress}</Label>
                                <Input className="form-control" type="email" placeholder="Enter email" />
                            </FormGroup>
                            <FormGroup>
                                <Label className="col-form-label">{ContactNumber}</Label>
                                <Input className="form-control" type="Number" placeholder="Enter contact number" />
                            </FormGroup>
                            <hr className="mt-4 mb-4 lightborder" />
                            <H4>{CompanyInformation}</H4>
                            <FormGroup>
                                <Label className="col-form-label">{CompanyName}</Label>
                                <Input className="form-control" type="text" placeholder="Company Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label className="col-form-label">{Website}</Label>
                                <Input className="form-control" type="text" placeholder="Website" />
                            </FormGroup>
                        </Form>
                        <hr className="mt-4 mb-4 lightborder" />
                        <H4 attrH4={{ className: 'pb-3 mb-0' }}>{BillingInformation}</H4>
                        <Form className="row form-space theme-form">
                            <Col className='col-auto'>
                                <Input className="form-control" type="text" placeholder="Name On Card" />
                            </Col>
                            <Col className='col-auto'>
                                <Input className="form-control" type="text" name="inputPassword" placeholder="Card Number" />
                            </Col>
                            <Col className='col-auto'>
                                <Input className="form-control" type="text" name="inputPassword" placeholder="Zip Code" />
                            </Col>
                        </Form>
                    </CardBody>
                    <FooterCard footerClass={'text-end'}/>
                </Card>
            </Col>
        </Fragment>
    );
};

export default MegaFormClass;