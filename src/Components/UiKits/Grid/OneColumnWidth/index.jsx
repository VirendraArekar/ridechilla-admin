import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import { Settingonecolumnwidth, Settingtext } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const OneColumnWidthCard = () => {
  return (
    <Col sm="12">
      <Card>
        <HeaderCard title={Settingonecolumnwidth} />
        <CardBody className="card-body grid-showcase">
          <P>{Settingtext}</P>
          <Row>
            <Col className="col"><span>{'1 of 3'}</span></Col>
            <Col className="col-6"><span>{'2 of 3 (wider)'}</span></Col>
            <Col className="col"><span> {'3 of 3'}</span></Col>
          </Row>
          <Row>
            <Col className="col"><span>{'1 of 3'}</span></Col>
            <Col className="col-5"><span> {'2 of 3 (wider)'}</span></Col>
            <Col className="col"><span>{'3 of 3'}</span></Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OneColumnWidthCard;