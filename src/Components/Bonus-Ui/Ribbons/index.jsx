import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader } from 'reactstrap';
import { ribboncode, ColoredRibbons, useclass } from '../../../Constant';
import { Breadcrumbs, H3 } from '../../../AbstractElements';
import RibbonClass from './RibbonClass';
import RibbonComponent from './RibbonCommon';

const Ribbons = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bouns Ui" title="Ribbons" mainTitle='Ribbons' />
      <Container fluid={true}>
        <Row>
          <Col sm="12" xl="12">
            <Card className='ribbons-main'>
              <CardHeader className='pb-0'>
                <H3>{ColoredRibbons}</H3>
                <span>{useclass} <code>{ribboncode}</code></span>
              </CardHeader>
              <RibbonClass />
            </Card>
          </Col>
          <RibbonComponent />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Ribbons;