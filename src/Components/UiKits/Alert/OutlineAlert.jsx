import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Alerts, H3,P } from '../../../AbstractElements';
import { doutline, OutlineAlerts, OutlineAlertstext } from '../../../Constant';
import { LightAlertData } from '../../../Data/Ui-kit/Data';

const OutlineAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="card height-equal" style={{ minHeight: '708px' }}>
        <CardHeader className='pb-0'>
          <H3>{OutlineAlerts}</H3>
          <span>{OutlineAlertstext} <code>{doutline}</code></span>
        </CardHeader>
        <CardBody className="card-body">
          {LightAlertData.map((data,i) => {
            return (
              <Alerts key={i} attrAlert={{ color: `${data.colorClass} outline` }}>
               <P>{data.pera}</P>
              </Alerts>
            )
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineAlert;