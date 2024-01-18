import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Alerts, H3,P } from '../../../AbstractElements';
import { ThemeColorAlertData } from '../../../Data/Ui-kit/Data';
import { ddark, ThemeAlerttext, ThemeColorAlerts } from '../../../Constant';

const ThemeColorAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{ThemeColorAlerts}</H3>
          <span>{ThemeAlerttext} <code>{ddark}</code></span>
        </CardHeader>
        <CardBody className="card-body">
          {ThemeColorAlertData.map((data,i) => {
            return (
              <Alerts attrAlert={{ color: `${data.colorClass}` }} key={i} >
                <P>{data.pera}</P>
              </Alerts>
            )
          })}
        </CardBody>
      </Card>
    </Col >
  );
};

export default ThemeColorAlert;