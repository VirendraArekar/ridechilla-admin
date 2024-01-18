import React, { Fragment } from 'react';
import { Col, Container, Row} from 'reactstrap';
import LoginForm from './LoginForm';

const LoginSample = () => {
    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <Row className="m-0">
                    <Col className='col-12 p-0'>
                        <div className="login-card">
                            <LoginForm/>                          
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default LoginSample;