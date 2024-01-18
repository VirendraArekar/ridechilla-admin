import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { Defaultitem1, Defaultitem2, Defaultitem3, WithBadges } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const WithBadge = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeaderCard title={WithBadges} />
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{Defaultitem1}<span className="badge badge-primary counter digits">{'14'}</span></LI>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{Defaultitem2}<span className="badge badge-secondary counter digits">{'2'}</span></LI>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{Defaultitem3}<span className="badge badge-success rounded-pill counter digits">{'1'}</span></LI>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{Defaultitem2}<span className="badge badge-info rounded-pill digits">{'100%'}</span></LI>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{Defaultitem2}<span className="badge badge-warning counter digits">{'2'}</span></LI>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{Defaultitem3}<span className="badge badge-danger rounded-pill digits">{'sale'}</span></LI>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{Defaultitem1}<span className="badge badge-light text-dark counter digits">{'14'}</span></LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithBadge;
