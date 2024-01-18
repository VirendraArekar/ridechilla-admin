import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Alerts, H3,P } from '../../../AbstractElements';
import { doutline2, OutlineAlertstext, OutlineDarkAlerts } from '../../../Constant';
import { LightAlertData } from '../../../Data/Ui-kit/Data';

const DarkOutlineAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="card height-equal" style={{ minHeight: '708px' }}>
        <CardHeader className='pb-0'>
          <H3>{OutlineDarkAlerts}</H3>
          <span>{OutlineAlertstext} <code>{doutline2}</code></span>
        </CardHeader>
        <CardBody >
          {LightAlertData.map((data,i) => {
            return (
              <Alerts key={i} attrAlert={{ color: `${data.colorClass} outline-2x` }}>
                <P>{data.pera}</P>
              </Alerts>
            )
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkOutlineAlert;