import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { ContextualClasses, Dangertext, Darktext, Defaultitem2, Infotext, Ligthtext, Primarytext, Secondarytext, Successtext, Warningtext } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const ContextualClass = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeaderCard title={ContextualClasses} />
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item' }} >{Defaultitem2}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-primary' }}  >{Primarytext}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-secondary' }} >{Secondarytext}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-success' }}  >{Successtext}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-danger' }}  >{Dangertext}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-warning' }}  >{Warningtext}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-info' }}  >{Infotext}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-light' }}  >{Ligthtext}</LI>
            <LI attrLI={{ className: 'list-group-item list-group-item-dark' }}  >{Darktext}</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualClass;
