import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { Defaultitem1, Defaultitem2, Defaultitem3, Defaultitem4, Defaultitem5, DefaultList} from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const DefaultLists = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeaderCard title={DefaultList} />
        <CardBody>
          <UL>
            <LI>{Defaultitem1}</LI>
            <LI>{Defaultitem2}</LI>
            <LI>{Defaultitem3}</LI>
            <LI>{Defaultitem4}</LI>
            <LI>{Defaultitem5}</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultLists;
