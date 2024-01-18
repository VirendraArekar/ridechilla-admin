import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import { colmd, drow, GridColtext, GridColtext2, GridColumn } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const GridColumnCard = () => {
  return (
    <Col sm="12">
      <Card>
        <HeaderCard title={GridColumn} />
        <CardBody className="card-body grid-showcase">
          <P>{GridColtext} <code>.{colmd}*</code> {GridColtext2} <code>{drow}</code>.</P>
          <Row>
            <Col md="1 text-center"><span>{`${colmd}1`}</span></Col>
            <Col md="2 text-center"><span>{`${colmd}2`}</span></Col>
            <Col md="2 text-center"><span>{`${colmd}2`}</span></Col>
            <Col md="3 text-center"><span>{`${colmd}3`}</span></Col>
            <Col md="4 text-center"><span>{`${colmd}4`}</span></Col>
            <Col md="5 text-center"><span>{`${colmd}5`}</span></Col>
            <Col md="7 text-center"><span>{`${colmd}7`}</span></Col>
            <Col md="6 text-center"><span>{`${colmd}6`}</span></Col>
            <Col md="6 text-center"><span>{`${colmd}6`}</span></Col>
            <Col md="8 text-center"><span>{`${colmd}8`}</span></Col>
            <Col md="4 text-center"><span>{`${colmd}4`}</span></Col>
            <Col md="9 text-center"><span>{`${colmd}9`}</span></Col>
            <Col md="3 text-center"><span>{`${colmd}3`}</span></Col>
            <Col md="10 text-center"><span>{`${colmd}10`}</span></Col>
            <Col md="2 text-center"><span>{`${colmd}2`}</span></Col>
            <Col md="12 text-center"><span>{`${colmd}12`}</span></Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridColumnCard;