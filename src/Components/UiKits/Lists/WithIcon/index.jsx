import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { Defaultitem1, Defaultitem2, Defaultitem3, Defaultitem5, WithIcon } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const WithIcons = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeaderCard title={WithIcon} />
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}><i className="icon-save-alt"></i>{Defaultitem1}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}><i className="icon-target"></i>{Defaultitem2}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}><i className="icon-mobile"></i>{Defaultitem3}</LI>
            <LI attrLI={{ className: 'list-group-item-action disabled' }}><i className="icon-shopping-cart-full"></i>{Defaultitem5}</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIcons;
