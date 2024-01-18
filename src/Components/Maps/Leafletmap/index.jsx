import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import AustraliaMap from './Australia';
import IndiaMap from './IndiaMap';
import USAMap from './USAMap';
import WorldMap from './WorldMap';

const LeafletMapContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={'Leaflet Map'} parent={'Map'} title={'Leaflet Map'} />
      <Container fluid={true}>
        <Row>
          <WorldMap />
          <USAMap />
          <IndiaMap />
          <AustraliaMap />
        </Row>
      </Container>
    </Fragment>
  );
};
export default LeafletMapContain;