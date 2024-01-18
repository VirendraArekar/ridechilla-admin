import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H3, Progressbar } from '../../../../AbstractElements';
import { Progresstext, SmallProgressBars, SmallProgresscode, Use } from '../../../../Constant';

const Small = () => {
  return (
    <Card>
      <CardHeader className='pb-0'>
        <H3>{SmallProgressBars}</H3><span>{Use} <code> {SmallProgresscode}</code>{Progresstext}</span>
      </CardHeader>
      <CardBody className="card-body progress-showcase row">
        <Col>
          <Progressbar attrProgress={{ value: '25', color: 'primary', className: 'sm-progress-bar' }} />
          <Progressbar attrProgress={{ color: 'secondary', value: '50', className: 'sm-progress-bar' }} />
          <Progressbar attrProgress={{ color: 'success', value: '75', className: 'sm-progress-bar' }} />
          <Progressbar attrProgress={{ color: 'info', value: '100', className: 'sm-progress-bar' }} />
        </Col>
      </CardBody>
    </Card>
  );
};

export default Small;