import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H3, Progressbar } from '../../../../AbstractElements';
import { Add, CustomHeightcode, MultipleBarsText2, MultipleBarsText3, ProgressBarsStriped, toany } from '../../../../Constant';

const Striped = () => {
  return (
    <Card>
      <CardHeader className='pb-0'>
        <H3>{ProgressBarsStriped}</H3><span>{Add} <code>{MultipleBarsText2}</code> {toany} <code>{CustomHeightcode}</code> {MultipleBarsText3}</span>
      </CardHeader>
      <CardBody className="card-body progress-showcase row">
        <Col>
          <Progressbar attrProgress={{ color: 'primary', value: '10', striped: true }} />
          <Progressbar attrProgress={{ color: 'secondary', value: '25', striped: true }} />
          <Progressbar attrProgress={{ color: 'success', value: '50', striped: true }} />
          <Progressbar attrProgress={{ color: 'info', value: '75', striped: true }} />
        </Col>
      </CardBody>
    </Card>
  );
};

export default Striped;