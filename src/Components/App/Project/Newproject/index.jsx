import React, { Fragment } from 'react';
import { Breadcrumbs} from '../../../../AbstractElements';
import { Container, Row, Col, Card, CardBody} from 'reactstrap';
import MainList from './MainList';

const Newproject = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Project" title="Project Create" mainTitle="Project Create" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <MainList/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Newproject;