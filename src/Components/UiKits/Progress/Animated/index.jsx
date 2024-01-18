import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H3, Progressbar } from '../../../../AbstractElements';
import { CustomHeightcode, ProgressAnimatedcode, ProgressAnimatedtext, ProgressAnimatedtext2, ProgressBarsAnimated, To } from '../../../../Constant';

const Animated = () => {
  return (
    <Card>
      <CardHeader className='pb-0'>
        <H3>{ProgressBarsAnimated}</H3>
        <span>{ProgressAnimatedtext} <code>{ProgressAnimatedcode}</code> {To} <code>{CustomHeightcode} </code> {ProgressAnimatedtext2}</span>
      </CardHeader>
      <CardBody className="card-body progress-showcase row">
        <Col>
          <Progressbar attrProgress={{ color: 'primary', value: '10', animated: true }} />
          <Progressbar attrProgress={{ color: 'secondary', value: '25', animated: true }} />
          <Progressbar attrProgress={{ color: 'success', value: '50', animated: true }} />
          <Progressbar attrProgress={{ color: 'info', value: '75', animated: true }} />
        </Col>
      </CardBody>
    </Card>
  );
};

export default Animated;