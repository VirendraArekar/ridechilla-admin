import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import LoginForm from './LoginForm';
import imgg from '../../../assets/images/login/3.jpg';

const LoginTwo = () => {
    return (
        <Fragment>
            <Container fluid={true}>
                <Row>
                    <Col xl="5" className='b-center bg-size' style={{ backgroundImage: `url(${imgg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
                    </Col>
                    <Col xl="7 p-0" >
                        <div className="login-card">
                            <LoginForm />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default LoginTwo;