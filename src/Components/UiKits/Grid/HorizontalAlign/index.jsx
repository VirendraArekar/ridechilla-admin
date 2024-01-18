import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import { HorizontalAlignment, Oneofthreecolumns, Textpara } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const HorizontalAlignCard = () => {
  return (
    <Col sm="12">
      <Card>
        <HeaderCard title={HorizontalAlignment} />
        <CardBody className="card-body grid-showcase grid-align">
          <P>{Textpara}</P>
          <Row className="justify-content-start">
            <Col className="col-4"><span>{Oneofthreecolumns}</span></Col>
            <Col className="col-4"><span>{Oneofthreecolumns}</span></Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-4"><span>{Oneofthreecolumns}</span></Col>
            <Col className="col-4"><span>{Oneofthreecolumns}</span></Col>
          </Row>
          <Row className="justify-content-end">
            <Col className="col-4"><span>{Oneofthreecolumns}</span></Col>
            <Col className="col-4"><span>{Oneofthreecolumns}</span></Col>
          </Row>
          <Row className="justify-content-around">
            <Col className="col-4"><span>{Oneofthreecolumns}</span></Col>
            <Col className="col-4"><span>{Oneofthreecolumns}</span></Col>
          </Row>
          <Row className="justify-content-between">
            <Col className="col-4"><span>{Oneofthreecolumns}</span></Col>
            <Col className="col-4"><span>{Oneofthreecolumns}</span></Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalAlignCard;