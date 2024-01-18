import React, { useState } from 'react';
import { Card, CardBody,  Col } from 'reactstrap';
import { Alerts,  P } from '../../../AbstractElements';
import { AlertText, AlertWithIconInverse, AlertWithIconpara, miniute } from '../../../Constant';
import { IconInverseData } from '../../../Data/Ui-kit/Data';
import HeaderCard from '../../Common/Component/HeaderCard';
import CommonAlert from './Common/CommonAlert';

const IconInverse = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Col sm="12" xl="6">
      <Card className="card height-equal" style={{ minHeight: '708px' }}>
        <HeaderCard title={AlertWithIconInverse} span1={AlertText} />
        <CardBody>
          <Alerts attrAlert={{className: 'alert-dismissible', color: 'primary inverse',isOpen: Open,target: 'Alert-1'}}
            closeBtn={true}
            attrBtn={{ className: 'btn-close', color: 'default', id: 'Alert-1', onClick: Toggle }}>
            <i className="icon-timer"></i>
            <P>{AlertWithIconpara}<b>5</b>{miniute}</P>
          </Alerts>
          {IconInverseData.map((data,i) =>{
            return <CommonAlert key={i} item={data} />
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconInverse;