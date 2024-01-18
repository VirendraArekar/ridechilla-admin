import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import { Oneofthreecolumns, Textpara, VerticalAlignment } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const VerticalAlignCard = () => {
  return (
    <Col sm="12">
      <Card>
        <HeaderCard title={VerticalAlignment} />
        <CardBody className="card-body grid-showcase grid-align">
          <P>{Textpara}</P>
          <Row>
            <Col className="col align-self-start"><span>{Oneofthreecolumns}</span></Col>
            <Col className="col align-self-center"><span>{Oneofthreecolumns}</span></Col>
            <Col className="col align-self-end"><span>{Oneofthreecolumns}</span></Col>
          </Row>
          <Row className="align-items-start">
            <Col className="col"><span>{Oneofthreecolumns}</span></Col>
            <Col className="col"><span>{Oneofthreecolumns}</span></Col>
            <Col className="col"><span>{Oneofthreecolumns}</span></Col>
          </Row>
          <Row className="align-items-center">
            <Col className="col"><span>{Oneofthreecolumns}</span></Col>
            <Col className="col"><span>{Oneofthreecolumns}</span></Col>
            <Col className="col"><span>{Oneofthreecolumns}</span></Col>
          </Row>
          <Row className="align-items-end">
            <Col className="col"><span>{Oneofthreecolumns}</span></Col>
            <Col className="col"><span>{Oneofthreecolumns}</span></Col>
            <Col className="col"><span>{Oneofthreecolumns}</span></Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalAlignCard;