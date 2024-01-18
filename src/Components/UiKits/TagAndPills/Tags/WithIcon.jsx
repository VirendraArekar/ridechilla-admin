import React from 'react';
import { Mail, DollarSign, Headphones, Link, GitHub, Award, Activity, Heart } from 'react-feather';
import { Card, CardBody, Col } from 'reactstrap';
import { Badges } from '../../../../AbstractElements';
import { TagsWithIcon } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const TagWithIcon = () => {

  return (
    <Col sm="12" xl="6">
      <Card>
        <HeaderCard title={TagsWithIcon} />
        <CardBody>
          <Badges attrBadge={{ color: 'primary', href: '#javascript' }} ><DollarSign /></Badges>
          <Badges attrBadge={{ color: 'secondary', href: '#javascript' }}><Headphones /></Badges>
          <Badges attrBadge={{ color: 'success', href: '#javascript' }}><Link /></Badges>
          <Badges attrBadge={{ color: 'info', href: '#javascript' }}><GitHub /></Badges>
          <Badges attrBadge={{ color: 'warning', href: '#javascript' }}><Award /></Badges>
          <Badges attrBadge={{ color: 'danger', href: '#javascript' }}><Activity /></Badges>
          <Badges attrBadge={{className:'text-dark', color: 'light', href: '#javascript' }}><Heart /></Badges>
          <Badges attrBadge={{ color: 'dark', href: '#javascript' }}><Mail /></Badges>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TagWithIcon;