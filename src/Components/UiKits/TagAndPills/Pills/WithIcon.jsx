import React from 'react';
import { Mail, DollarSign, Headphones, Link, GitHub, Award, Activity, Heart } from 'react-feather';
import { Card, CardBody, Col } from 'reactstrap';
import { Badges } from '../../../../AbstractElements';
import { PillsWithIcon } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const PillWithIcon = () => {

  return (
    <Col sm="12" xl="6">
      <Card>
        <HeaderCard title={PillsWithIcon} />
        <CardBody>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'primary', href: '#javascript', pill: true }} ><DollarSign /></Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'secondary', href: '#javascript', pill: true }}><Headphones /></Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'success', href: '#javascript', pill: true }}><Link /></Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'info', href: '#javascript', pill: true }}><GitHub /></Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'warning', href: '#javascript', pill: true }}><Award /></Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'danger', href: '#javascript', pill: true }}><Activity /></Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill text-dark', color: 'light', href: '#javascript', pill: true }}><Heart /></Badges>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'dark', href: '#javascript', pill: true }}><Mail /></Badges>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWithIcon;