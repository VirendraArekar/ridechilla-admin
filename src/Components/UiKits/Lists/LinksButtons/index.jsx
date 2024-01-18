import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { Defaultitem1, Defaultitem2, Defaultitem3, Defaultitem4, Defaultitem5, LinksAndButtons } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const LinksButtons = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeaderCard title={LinksAndButtons} />
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript', active: true }} >{Defaultitem1}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }} >{Defaultitem2}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }} >{Defaultitem3}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }} >{Defaultitem4}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript', disabled: true }} >{Defaultitem5}</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinksButtons;
