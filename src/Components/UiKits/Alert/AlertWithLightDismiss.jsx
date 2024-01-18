import React, { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Alerts, P } from '../../../AbstractElements';
import { Alertpara, Dismissing, Dismissingtext, Holy } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';
import { AlertWithLightDismissData } from '../../../Data/Ui-kit/Data';
import CommonAlert from './Common/CommonAlert';

const AlertWithLightDismiss = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Col sm="12" xl="6">
      <Card className="height-equal" style={{ minHeight: '708px' }}>
        <HeaderCard title={Dismissing} span1={Dismissingtext} />
        <CardBody className="card-body">
          <Alerts attrAlert={{className: 'alert-dismissible', color: 'primary',isOpen: Open,target: 'Alert-1'}} closeBtn={true}
            attrBtn={{ className: 'btn-close', color: 'default', id: 'Alert-1', onClick: Toggle }}>
            <P><strong>{Holy}</strong> {Alertpara}</P>
          </Alerts>
          {AlertWithLightDismissData.map((data) => {
            return <CommonAlert item={data} key={data.id} />
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithLightDismiss;