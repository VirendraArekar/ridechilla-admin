import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Image, LI } from '../../../../AbstractElements';
import { Defaultitem1, Defaultitem2, Defaultitem3, Defaultitem5, WithImageRounded } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const WithImageRound = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeaderCard title={WithImageRounded} />
        <CardBody>
          <div className='list-group'>
            <LI attrLI={{ className: 'list-group-item-action' }}>
              <Image attrImage={{ body: true, className: 'rounded-circle', src: `${require('../../../../assets/images/user/1.jpg')}`, alt: '' }} />
              {Defaultitem1}
            </LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}>
              <Image attrImage={{ body: true, className: 'rounded-circle', src: `${require('../../../../assets/images/user/1.jpg')}`, alt: '' }} />
              {Defaultitem2}
            </LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}>
              <Image attrImage={{ body: true, className: 'rounded-circle', src: `${require('../../../../assets/images/user/1.jpg')}`, alt: '' }} />
              {Defaultitem3}
            </LI>
            <LI attrLI={{ className: 'list-group-item-action disabled' }}>
              <Image attrImage={{ body: true, className: 'rounded-circle', src: `${require('../../../../assets/images/user/1.jpg')}`, alt: '' }} />
              {Defaultitem5}
            </LI>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithImageRound;
