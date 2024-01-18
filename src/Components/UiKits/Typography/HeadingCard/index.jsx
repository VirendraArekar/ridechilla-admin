import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H3 } from '../../../../AbstractElements';
import { AllHTMLheadings, areavailable, Headings } from '../../../../Constant';
import HeadingTag from './HeadingTag';
import SubHeadings from './SubHeading';
import {through} from '../../../../Constant';

const HeadingCard = () => (
  <Col sm="12">
    <Card>      
      <CardHeader className='pb-0'>
        <H3>{Headings}</H3>
        <span>{AllHTMLheadings}, <code>&lt;h1&gt;</code> {through} <code>&lt;{'h6'}&gt;</code>, {areavailable}.</span>
      </CardHeader>
      <CardBody className="typography">
        <Row>
          <Col sm="12" lg="6">
            <HeadingTag />
          </Col>
          <Col sm="12" lg="6">
            <SubHeadings />
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
);

export default HeadingCard;