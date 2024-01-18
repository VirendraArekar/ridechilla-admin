import React, { Fragment, useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H2, P, Image } from '../../../AbstractElements';
import { EmailAddress, EmailPassword, ForgotPassword, Password, RememberPassword, SignIn, signinaccount } from '../../../Constant';
import SocialAuth from './SocialAuth';

const LoginForm = () => {
    const [togglePassword, setTogglePassword] = useState(false);

    return (
        <Fragment>
            <div>
                <div className='logo'>
                    <Image attrImage={{ className: 'img-fluid for-light', src: `${require('../../../assets/images/logo/logo.png')}` }} />
                </div>
                <div className='login-main'>
                    <Form className="theme-form">
                        <H2 attrH2={{ className: "text-center" }}>{signinaccount}</H2>
                        <P attrPara={{ className: 'text-center' }}>{EmailPassword}</P>
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
                                <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                            </div>
                            <a className="link" href="#javascript">{ForgotPassword}</a>
                            <div className='text-end mt-3'>
                                <Btn attrBtn={{ color: 'primary w-100', className: 'btn-block' }} >{SignIn}</Btn>
                            </div>
                        </FormGroup>
                        <SocialAuth />
                    </Form>
                </div>
            </div>
        </Fragment>
    );
};

export default LoginForm;