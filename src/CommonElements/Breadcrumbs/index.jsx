import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Home } from 'react-feather';
import { OL, LI, H3 } from '../../AbstractElements';

const Breadcrumbs = (props) => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="page-title">
          <Row>
            <Col xs="6">
              <H3>{props.mainTitle}</H3>
            </Col>
            <Col xs="6">
              <OL attrOL={{ className: 'breadcrumb' }}>
                <LI attrLI={{ className: 'breadcrumb-item' }}><Link to={`${process.env.PUBLIC_URL}/dashboard/default`}><Home /></Link></LI>
                <LI attrLI={{ className: 'breadcrumb-item' }}>{props.parent}</LI>
                {props.subParent ? <LI attrLI={{ className: 'breadcrumb-item' }}>{props.subParent}</LI> : ''}
                <LI attrLI={{ className: 'breadcrumb-item active' }}>{props.title}</LI>
              </OL>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Breadcrumbs;