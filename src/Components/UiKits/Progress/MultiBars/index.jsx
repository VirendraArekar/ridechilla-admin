import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Progressbar } from '../../../../AbstractElements';
import { MultipleBars, MultipleBarsText } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const MultiBars = () => {

  return (
    <Card>
      <HeaderCard title={MultipleBars} span1={MultipleBarsText} />
      <CardBody className="progress-showcase row">
        <Col>
          <Progressbar attrProgress={{ multi: true }}>
            <Progressbar attrProgress={{ bar: true, color: 'primary', value: '30' }} />
            <Progressbar attrProgress={{ bar: true, color: 'secondary', value: '20' }} />
            <Progressbar attrProgress={{ bar: true, color: 'success', value: '15' }} />
          </Progressbar>
          <Progressbar attrProgress={{ multi: true }}>
            <Progressbar attrProgress={{ bar: true, color: 'primary', value: '10' }} />
            <Progressbar attrProgress={{ bar: true, color: 'secondary', value: '10' }} />
            <Progressbar attrProgress={{ bar: true, color: 'success', value: '10' }} />
            <Progressbar attrProgress={{ bar: true, color: 'info', value: '10' }} />
            <Progressbar attrProgress={{ bar: true, color: 'warning', value: '10' }} />
            <Progressbar attrProgress={{ bar: true, color: 'danger', value: '10' }} />
            <Progressbar attrProgress={{ bar: true, color: 'primary', value: '10' }} />
            <Progressbar attrProgress={{ bar: true, color: 'light', value: '10' }} />
          </Progressbar>
        </Col>
      </CardBody>
    </Card>
  );

};

export default MultiBars;