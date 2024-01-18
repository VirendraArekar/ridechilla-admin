import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LoginTab from './Tabs/LoginTab';
import { Image } from '../AbstractElements';

const Logins = () => {
  return (
    <Container fluid={true} className="p-0">
      <Row className='m-0'>
        <Col xs="12" className='p-0'>
          <div className="login-card auth-login">
            <div>
              <div className='logo'>
                <Image attrImage={{ className: 'img-fluid for-light', src: `${require('../assets/images/logo/logo.png')}`, alt: 'logo image' }} />
              </div>
              <div className="login-main login-tab">
                <LoginTab />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Logins;