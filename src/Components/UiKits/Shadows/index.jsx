import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Breadcrumbs, H3 } from '../../../AbstractElements';
import { box_shadow, Examples, Shadowcode, Shadowpara, Shadowpara1, Shadowpara2, Shadowpara3, shadow_none } from '../../../Constant';
import LargeShadows from './Large';
import NoShadows from './NoShadow';
import RegularShadows from './Regular';
import SmallShadows from './Small';

const Shadow = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Box Shadow" parent="Ui Kits" title="Box Shadow" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card className="box-shadow-title">
              <CardHeader className='pb-0'>
                <H3>{Examples}</H3>
                <span>{Shadowpara} <code>{Shadowcode}</code>, {Shadowpara1} <code>{box_shadow}</code> {Shadowpara2} <code>{shadow_none}</code> {Shadowpara3}</span>
              </CardHeader>
              <CardBody className="row">
                <LargeShadows />
                <RegularShadows />
                <SmallShadows />
                <NoShadows />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Shadow;