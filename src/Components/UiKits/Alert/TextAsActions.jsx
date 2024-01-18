import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Alerts, Btn, H3, P } from '../../../AbstractElements';
import { alertlink, AlertWithIconpara, Linkcolortext, miniute, TextAsAction, Usethe } from '../../../Constant';
import { TextAsActionsData } from '../../../Data/Ui-kit/Data';
import CommonAlert from './Common/CommonAlert';

const TextAsActions = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Col sm="12" xl="6">
      <Card className="height-equal" style={{ minHeight: '708px' }}>
        <CardHeader className='pb-0'>
          <H3>{TextAsAction}</H3>
          <span>{Usethe} <code>{alertlink}</code> {Linkcolortext}</span>
        </CardHeader>
        <CardBody className="card-body dismiss-text">
          <Alerts attrAlert={{ color: 'primary inverse alert-dismissible ', isOpen: Open, target: 'Alert-1' }}>
            <i className="icon-timer"></i>
            <P>{AlertWithIconpara} <b>{'5'}</b> {miniute}
              <Btn attrBtn={{ className: 'btn-close', color: 'transperant', id: 'Alert-1', onClick: Toggle }} >
                <span className="bg-primary">{'dismiss'}</span></Btn></P>
          </Alerts>
          {
            TextAsActionsData.map((data) =>{
              return <CommonAlert key={data.id} item={data} btnText={true} />
            })}
        </CardBody>
      </Card>
    </Col>
  );
};
export default TextAsActions;