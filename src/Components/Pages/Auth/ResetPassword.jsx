import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, P, Image } from '../../../AbstractElements';
import { CreateAccount, CreateyourPassword, Done, Donthaveaccount, NewPassword, RememberPassword, RetypePassword } from '../../../Constant';
import { ResetPwdSvg } from './Svg';

const ResetPassword = () => {
    const [togglePassword, setTogglePassword] = useState(false);
    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <Row>
                    <Col xl="12">
                        <div className='login-card'>
                            <div>
                                <div className='logo'>
                                    <Image attrImage={{ className: 'img-fluid for-light', src: `${require('../../../assets/images/logo/logo.png')}` }} />
                                </div>
                                <div className='login-main'>
                                    <Form className="theme-form">
                                        <H4>{CreateyourPassword}</H4>
                                        <ResetPwdSvg />
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
                                        <FormGroup className='mb-0'>
                                            <div className="checkbox p-0">
                                                <Input id="checkbox1" type="checkbox" />
                                                <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                                                <Btn attrBtn={{ className: 'btn-block w-100 mt-3', color: 'primary', type: 'submit' }} >{Done}</Btn>
                                            </div>
                                        </FormGroup>
                                        <P attrPara={{ className: 'mt-4 mb-0' }}>{Donthaveaccount}
                                            <Link className='ps-2' to={`${process.env.PUBLIC_URL}/pages/authentication/register-simpleimg`}>{CreateAccount}</Link>
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
export default ResetPassword;