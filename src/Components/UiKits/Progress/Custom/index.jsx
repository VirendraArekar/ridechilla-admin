import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H3, Progressbar } from '../../../../AbstractElements';
import { CustomHeightcode, CustomHeightcode2, CustomHeightProgressBars, CustomHeighttext, CustomHeighttext2, CustomHeighttext3 } from '../../../../Constant';

const Custom = () => {
  return (
    <Card>
      <CardHeader className='pb-0'>
        <H3>{CustomHeightProgressBars}</H3>
        <span>{CustomHeighttext} <code>{CustomHeightcode}</code>{CustomHeighttext2} <code>{CustomHeightcode2} </code> {CustomHeighttext3}</span>
      </CardHeader>
      <CardBody className="card-body progress-showcase row">
        <Col>
          <Progressbar attrProgress={{ color: 'primary', value: '25', className: 'xs-progress-bar',style:{'height':'1px'} }} />
          <Progressbar attrProgress={{ color: 'secondary', value: '50', className: 'sm-progress-bar' }} />
          <Progressbar attrProgress={{ color: 'success', value: '75', className: 'md-progress-bar',style:{'height':'11px'} }} />
          <Progressbar attrProgress={{ color: 'info', value: '100', className: 'lg-progress-bar',style:{'height':'19px'} }} />
        </Col>
      </CardBody>
    </Card>
  );
};

export default Custom;