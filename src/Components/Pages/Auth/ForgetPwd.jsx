import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H2, H3, P, Image } from '../../../AbstractElements';
import { AlreadyhavePassword, CreateyourPassword, Done, EnterMobileNumber, EnterOTP, Ifdontrecieveotp, NewPassword, RememberPassword, Resend, ResetPassword, RetypePassword, Send, SignIn } from '../../../Constant';

const ForgetPwd = () => {
    const [togglePassword, setTogglePassword] = useState(false);
    return (
        <Fragment>
            <Container className='p-0' fluid={true}>
                <Row>
                    <Col className="col-12">
                        <div className='login-card'>
                            <div>
                                <div className='logo'>
                                    <Image attrImage={{ className: 'img-fluid for-light', src: `${require('../../../assets/images/logo/logo.png')}` }} />
                                </div>
                                <div className='login-main'>
                                    <Form className="theme-form">
                                        <H2 attrH2={{ className: 'text-start' }}>{ResetPassword}</H2>
                                        <FormGroup className="form-group">
                                            <Label className='col-form-label'>{EnterMobileNumber}</Label>
                                            <Row>
                                                <Col xs="4" sm="3">
                                                    <Input className="form-control mb-1" type="text" defaultValue="+ 91" />
                                                </Col>
                                                <Col xs="8" sm="9">
                                                    <Input className="form-control mb-1" type="tel" defaultValue="000-000-0000" />
                                                </Col>
                                                <Col xs='12'>
                                                    <div className='text-end'>
                                                        <Btn attrBtn={{ className: 'btn-block m-t-10', color: 'primary', type: 'submit' }} >{Send}</Btn>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup className='mt-4 mb-4'>
                                            <span className="reset-password-link">{Ifdontrecieveotp}
                                                <a className="btn-link text-danger" href="#javascript">{Resend}</a>
                                            </span>
                                        </FormGroup>
                                        <FormGroup className="form-group">
                                            <Label className="col-form-label pt-0">{EnterOTP}</Label>
                                            <Row>
                                                <Col>
                                                    <Input className="form-control text-center opt-text" type="text" defaultValue="00" maxLength="2" />
                                                </Col>
                                                <Col>
                                                    <Input className="form-control text-center opt-text" type="text" defaultValue="00" maxLength="2" />
                                                </Col>
                                                <Col>
                                                    <Input className="form-control text-center opt-text" type="text" defaultValue="00" maxLength="2" />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <H3 attrH3={{ className: 'mt-4' }}>{CreateyourPassword}</H3>
                                        <FormGroup className='form-group'>
                                            <Label className="col-form-label">{NewPassword}</Label>
                                            <div className='form-input position-relative'>
                                                <Input className="form-control" type={togglePassword ? 'text' : 'password'} placeholder='*********' required />
                                                <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}>
                                                    <span className={togglePassword ? '' : 'show'}></span>
                                                </div>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="form-group">
                                            <Label className="col-form-label">{RetypePassword}</Label>
                                            <Input className="form-control" type="password" name="login[password]" required placeholder="*********" />
                                        </FormGroup>
                                        <FormGroup className="form-group">
                                            <div className="checkbox">
                                                <Input id="checkbox1" type="checkbox" />
                                                <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                                            </div>
                                            <Btn attrBtn={{ color: 'primary', className: 'btn btn-block w-100 mt-3', type: 'submit' }} >{Done}</Btn>
                                        </FormGroup>
                                        <P attrPara={{ className: 'mt-4 mb-0 text-center' }}>{AlreadyhavePassword}
                                            <Link className='ms-2' to={`${process.env.PUBLIC_URL}/login`}>{SignIn}</Link>
                                        </P>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default ForgetPwd;