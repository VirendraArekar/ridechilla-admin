import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Progressbar from '../../../../CommonElements/Progressbar';
import { ProgressBarsStates, ProgressBarstext } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const States = () => {
  return (
    <Card>
      <HeaderCard title={ProgressBarsStates} span1={ProgressBarstext} />
      <CardBody className="card-body progress-showcase row">
        <Col>
          <Progressbar attrProgress={{ color: 'primary', value: '25' }} />
          <Progressbar attrProgress={{ color: 'secondary', value: '50' }} />
          <Progressbar attrProgress={{ color: 'success', value: '75' }} />
          <Progressbar attrProgress={{ color: 'info', value: '100' }} />
        </Col>
      </CardBody>
    </Card>
  );
};

export default States;
