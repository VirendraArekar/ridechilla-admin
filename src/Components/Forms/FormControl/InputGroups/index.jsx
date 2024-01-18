import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import BasicInputCard1 from './BasicInputCard1';
import BasicInputCard2 from './BasicInputCard2';
import { Container, Row, Col } from 'reactstrap'

const InputGroups = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Form Controls" title="Input Groups" mainTitle='Input Groups' />
      <Container fluid={true}>
        <Row>
          <Col sm="6">
            <BasicInputCard1 />
          </Col>
          <Col sm="6">
            <BasicInputCard2 />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default InputGroups;