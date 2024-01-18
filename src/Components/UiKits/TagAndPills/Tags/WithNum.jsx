import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Badges } from '../../../../AbstractElements';
import { TagsWithNumber } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const TagWithNum = () => {

  return (
    <Col sm="12" xl="6">
      <Card>
        <HeaderCard title={TagsWithNumber} />
        <CardBody className="digits">
          <Badges attrBadge={{ color: 'primary', href: '#javascript' }}>{'1'}</Badges>
          <Badges attrBadge={{ color: 'secondary', href: '#javascript' }}  >{'2'}</Badges>
          <Badges attrBadge={{ color: 'success', href: '#javascript' }}  >{'3'}</Badges>
          <Badges attrBadge={{ color: 'info', href: '#javascript' }}  >{'4'}</Badges>
          <Badges attrBadge={{ color: 'warning', href: '#javascript' }}  >{'5'}</Badges>
          <Badges attrBadge={{ color: 'danger', href: '#javascript' }}  >{'6'}</Badges>
          <Badges attrBadge={{className:'text-dark', color: 'light', href: '#javascript' }}  >{'7'}</Badges>
          <Badges attrBadge={{ color: 'dark', href: '#javascript' }}  >{'8'}</Badges>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TagWithNum;