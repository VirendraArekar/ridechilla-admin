import React, { useState } from 'react';
import { Clock } from 'react-feather';
import { Card, CardBody, Col } from 'reactstrap';
import { Alerts, P } from '../../../AbstractElements';
import { Alertpara, AlertText, AlertWithIcon } from '../../../Constant';
import { dataWithIcon } from '../../../Data/Ui-kit/Data';
import HeaderCard from '../../Common/Component/HeaderCard';
import CommonAlert from './Common/CommonAlert';

const AlertWithIcons = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Col sm="12" xl="6">
      <Card className="height-equal" style={{ minHeight: '708px' }}>
        <HeaderCard title={AlertWithIcon} span1={AlertText} />
        <CardBody>
          <Alerts attrAlert={{
            className: 'alert-dismissible', color: 'primary dark',
            isOpen: Open,
            target: 'Alert-1',
          }}
            closeBtn={true}
            attrBtn={{ className: 'btn-close', color: 'default', id: 'Alert-1', onClick: Toggle }}>
            <Clock />
            <P>{Alertpara}</P>
          </Alerts>
          {dataWithIcon.map((data,index) =>
            <CommonAlert key={data.id} item={data} />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithIcons;