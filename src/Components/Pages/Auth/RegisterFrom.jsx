import React, { Fragment, useState } from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H2, P, Image } from '../../../AbstractElements';
import { Agreewith, Alreadyhaveaccount, CreateAccount, CreateAccounttext, CreateyourAccount, EmailAddress, Password, PrivacyPolicy, SignIn, YourName } from '../../../Constant';
import SocialAuth from './SocialAuth';

const RegisterFrom = ({ headclass }) => {
    const [togglePassword, setTogglePassword] = useState(false);
    return (
        <Fragment>
            <div>
                <div className='logo'>
                    <Image attrImage={{ className: 'img-fluid for-light', src: `${require('../../../assets/images/logo/logo.png')}` }} />
                </div>
                <div className='login-main'>
                    <Form className="theme-form">
                        <H2 attrH2={{ className: `${headclass ? headclass : 'text-center'}` }}>{CreateyourAccount}</H2>
                        <P attrPara={{ className: `${headclass ? headclass : 'text-center'}` }}>{CreateAccounttext}</P>
                        <FormGroup className='form-group'>
                            <Label className="col-form-label pt-0">{YourName}</Label>
                            <Row className='g-2'>
                                <Col className='col-6'>
                                    <Input className="form-control" type="text" required placeholder='First name' />
                                </Col>
                                <Col className='col-6'>
                                    <Input className="form-control" type="text" required placeholder='Last name' />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <Label className="col-form-label">{EmailAddress}</Label>
                            <Input className="form-control" type="email" required placeholder='Test@gmail.com' />
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <Label className="col-form-label">{Password}</Label>
                            <div className='form-input position-relative'>
                                <Input className="form-control" type={togglePassword ? 'text' : 'password'} placeholder='*********' required />
                                <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}>
                                    <span className={togglePassword ? '' : 'show'}></span>
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup className="form-group mb-0">
                            <div className="checkbox p-0">
                                <Input id="checkbox1" type="checkbox" />
                                <Label className="text-muted" for="checkbox1">{Agreewith}</Label>
                                <a className="ms-2" href="#javascript">{PrivacyPolicy}</a>
                            </div>
                            <div className='text-end mt-3'>
                                <Btn attrBtn={{ color: 'primary w-100', className: 'btn-block' }} >{CreateAccount}</Btn>
                            </div>
                        </FormGroup>
                        <SocialAuth logtext={Alreadyhaveaccount} btntext={SignIn} />
                    </Form>
                </div>
            </div>
        </Fragment>
    );
};

export default RegisterFrom;