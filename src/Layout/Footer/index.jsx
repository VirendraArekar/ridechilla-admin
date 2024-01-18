import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Footer, P } from '../../AbstractElements';
import { useLocation } from 'react-router-dom';
import { FooterText } from '../../Constant';

const FooterClass = () => {
  const location = useLocation();
  return (
    <Fragment>
      <Footer attrFooter={{ className: `footer ${location.pathname === '/page-layout/footer-dark' ? 'footer-dark' : location.pathname === '/page-layout/footer-fixed' ? 'footer-fix' : ''}` }} >
        <Container fluid={true}>
          <Row>
            <Col xs="10" className="p-0 footer-left">
              <P attrPara={{ className: 'mb-0' }} >{FooterText}</P>
            </Col>
            <Col xs="2" className='p-0 footer-right'>
              <i className="fa fa-heart font-danger"></i>
            </Col>
          </Row>
        </Container>
      </Footer>
    </Fragment >
  );
};

export default FooterClass;