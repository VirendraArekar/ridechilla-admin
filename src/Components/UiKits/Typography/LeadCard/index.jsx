import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H3, P } from '../../../../AbstractElements';
import { Lead, Leadd, LeadPara, Leadtext } from '../../../../Constant';

const LeadCard = () =>{
    return(
      <Col sm="12">
        <Card>
          <CardHeader className='pb-0'>
            <H3>{Lead}</H3>
            <span>{Leadtext} <code>{Leadd}</code></span>
          </CardHeader>
          <CardBody>
            <P attrPara={{ className:'lead' }}>{LeadPara}</P>
          </CardBody>
        </Card>
      </Col>
    );
};

export default LeadCard;