import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Alerts ,P} from '../../../AbstractElements';
import { LightAlerts, LightAlertText } from '../../../Constant';
import { LightAlertData } from '../../../Data/Ui-kit/Data';
import HeaderCard from '../../Common/Component/HeaderCard';

const LightAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeaderCard title={LightAlerts} span1={LightAlertText} />
        <CardBody>
          {LightAlertData.map((data,index) => {
            return (
              <Alerts attrAlert={{ color: `${data.colorClass}`}} key={index} >
                <P>{data.pera}</P>
              </Alerts>
            )
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightAlert;