import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import { dorder, Firstlast, Firstunordered, Order, Ordercode, Ordertext, Ordertext1, Ordertext2, Ordertext3, Ordertext4, Ordertext5, Secondlast, Secondunordered, Thirdfirst, through, Use } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const OrderCard = () => {

  return (
    <Col sm="12">
      <Card>
        <HeaderCard title={Order} />
        <CardBody className="card-body grid-showcase">
          <P>{Use} <code>{dorder}</code> {Ordertext} <strong>{Ordertext1}</strong> {Ordertext2} <code>{Order}</code> {Ordertext3} <code>{Ordercode}</code>{Ordertext4} <code>{'1'}</code> {through} <code>{'12'}</code> {Ordertext5}</P>
          <Row>
            <Col className="col"><span>{Firstunordered}</span></Col>
            <Col className="col order-12"><span>{Secondlast}</span></Col>
            <Col className="col order-1"><span>{Thirdfirst}</span></Col>
          </Row>
          <Row>
            <Col className="col order-last"><span>{Firstlast}</span></Col>
            <Col className="col"><span>{Secondunordered}</span></Col>
            <Col className="col order-first"><span>{Thirdfirst}</span></Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderCard;