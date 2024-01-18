import React from 'react';
import { CardBody, Col } from 'reactstrap';
import { Mail, Bell, Settings, Music, AlertTriangle, AlertCircle } from 'react-feather';
import { Badges, Btn } from '../../../AbstractElements';
import { Alert, DataUses, Messages, Notification, PlayingNow, Updateavailable } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';

const ButtonPart = () => {
  return (
    <Col sm="12" xl="6">
      <div className="card height-equal">
        <HeaderCard title={'Badges as part buttons'} />
        <CardBody>
          <div className="mb-3">
            <Btn attrBtn={{ color: 'primary' }} >
              {Messages} <Badges attrBadge={{ className: 'badge rounded-pill badge-light text-dark', color: 'light', pill: true }} ><Mail /></Badges>
            </Btn>
          </div>
          <div className="mb-3">
            <Btn attrBtn={{ color: 'secondary', type: 'button' }} >
              {Notification} <Badges attrBadge={{ className: 'badge rounded-pill badge-light text-dark', color: 'light', pill: true }} ><Bell /></Badges></Btn>
          </div>
          <div className="mb-3">
            <Btn attrBtn={{ color: 'success' }} >{Updateavailable} <Badges attrBadge={{ className: 'badge rounded-pill badge-light text-dark', color: 'light', pill: true }} ><Settings /></Badges></Btn>
          </div>
          <div className="mb-3">
            <Btn attrBtn={{ color: 'info' }} >{PlayingNow} <Badges attrBadge={{ className: 'badge rounded-pill badge-light text-dark', color: 'light', pill: true }} ><Music /></Badges></Btn>
          </div>
          <div className="mb-3">
            <Btn attrBtn={{ color: 'warning' }} >{DataUses} <Badges attrBadge={{ className: 'badge rounded-pill badge-light text-dark', color: 'light', pill: true }} ><AlertTriangle /></Badges></Btn>
          </div>
          <div>
            <Btn attrBtn={{ color: 'danger' }} >{Alert} <Badges attrBadge={{ className: 'badge rounded-pill badge-light text-dark', color: 'light', pill: true }} ><AlertCircle /></Badges></Btn>
          </div>
        </CardBody>
      </div>
    </Col>
  );
};

export default ButtonPart;