import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Progressbar } from '../../../../AbstractElements';
import { BasicProgressBars, BasicProgressBarsPara } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const Basic = () => {
  return (
    <Card>
      <HeaderCard title={BasicProgressBars} span1={BasicProgressBarsPara} />
      <CardBody className="card-body progress-showcase row">
        <Col>
          <Progressbar attrProgress={{ value: '0' }} />
          <Progressbar attrProgress={{ color: 'primary', value: '25' }} />
          <Progressbar attrProgress={{ color: 'secondary', value: '50' }} />
          <Progressbar attrProgress={{ color: 'success', value: '75' }} />
          <Progressbar attrProgress={{ color: 'info', value: '100' }} />
        </Col>
      </CardBody>
    </Card>
  );
};

export default Basic;