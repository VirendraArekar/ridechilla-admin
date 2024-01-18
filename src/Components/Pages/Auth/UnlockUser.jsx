import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H2, P, Image } from '../../../AbstractElements';
import { Alreadyhaveaccount, EnterPassword, RememberPassword, SignIn, Unlock } from '../../../Constant';
import { Unblocksvg } from './Svg';

const UnlockUser = () => {
    const [togglePassword, setTogglePassword] = useState(false)
    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <div className='authentication-main mt-0 p-0'>
                    <Row>
                        <Col className="p-0 col-12">
                            <div className='login-card'>
                                <div>
                                    <div className='logo'>
                                        <Image attrImage={{ className: 'img-fluid for-light', src: `${require('../../../assets/images/logo/logo.png')}` }} />
                                    </div>
                                    <div className='login-main'>
                                        <Form className="theme-form">
                                            <H2 attrH2={{ className: 'mb-0' }}>{Unlock}</H2>
                                            <FormGroup className='form-group'>
                                                <Unblocksvg />
                                            </FormGroup>
                                            <FormGroup className='form-group'>
                                                <Label className="col-form-label">{EnterPassword}</Label>
                                                <div className='form-input position-relative'>
                                                    <Input className="form-control" type={togglePassword ? 'text' : 'password'} placeholder='*********' required />
                                                    <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}>
                                                        <span className={togglePassword ? '' : 'show'}></span>
                                                    </div>
                                                </div>
                                            </FormGroup>
                                            <div>
                                                <div className="checkbox p-0">
                                                    <Input id="checkbox1" type="checkbox" />
                                                    <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                                                </div>
                                                <Btn attrBtn={{ color: 'primary', className: 'btn-block w-100 mt-3', type: 'submit' }} >{Unlock}</Btn>
                                            </div>
                                            <P attrPara={{ className: 'pt-4 mb-0' }}>{Alreadyhaveaccount}
                                                <Link className='ms-2' to={`${process.env.PUBLIC_URL}/login`}>{SignIn}</Link>
                                            </P>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};

export default UnlockUser;