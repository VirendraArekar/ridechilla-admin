import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Badges } from '../../../../AbstractElements';
import { PillsWithNumber } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const PillWithNum = () => {

  return (
    <Col sm="12" xl="6">
      <Card>
        <HeaderCard title={PillsWithNumber} />
        <CardBody className="card-body digits">
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'primary', pill: true }}>{'1'}</Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'secondary', pill: true }}  >{'2'}</Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'success', pill: true }}  >{'3'}</Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'info', pill: true }}  >{'4'}</Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'warning', pill: true }}  >{'5'}</Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'danger', pill: true }}  >{'6'}</Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill text-dark', color: 'light', pill: true }}  >{'7'}</Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'dark', pill: true }}  >{'8'}</Badges>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWithNum;