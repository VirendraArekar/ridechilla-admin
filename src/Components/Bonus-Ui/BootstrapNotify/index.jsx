import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Basic from './Basic';
import CustomDirectionsClass from './CustomDirections';
import CustomAutocloseClass from './CustomAutoclose';
import { Breadcrumbs } from '../../../AbstractElements';


const BootstrapNotifyContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Bootstrap Notify" parent="Bonus Ui" title="Bootstrap Notify" />
      <Container fluid={true}>
        <Row>
          <Basic />
          <CustomDirectionsClass />
          <CustomAutocloseClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default BootstrapNotifyContain;