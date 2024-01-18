import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H3, P } from '../../../../AbstractElements';
import { colortext, Danger, Dark, Info, Primary, secondary, spclass, Success, TextColor, textcolorPara, Thisis, txt_danger, txt_dark, txt_info, txt_primary, txt_secondary, txt_success, txt_warning, Warning } from '../../../../Constant';

const TextColorCard = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{TextColor}</H3>
          <span>{textcolorPara}</span>
        </CardHeader>
        <CardBody>
          <P attrPara={{ className: 'txt-primary' }}>{Thisis}{Primary}{colortext} <code>.{txt_primary}</code>{spclass}</P>
          <P attrPara={{ className: 'txt-secondary' }}>{Thisis}{secondary}{colortext} <code>.{txt_secondary}</code>{spclass}</P>
          <P attrPara={{ className: 'txt-success' }}>{Thisis}{Success}{colortext} <code>.{txt_success}</code>{spclass}</P>
          <P attrPara={{ className: 'txt-info' }}>{Thisis}{Info}{colortext} <code>.{txt_info}</code>{spclass}</P>
          <P attrPara={{ className: 'txt-warning' }}>{Thisis}{Warning}{colortext} <code>.{txt_warning}</code>{spclass}</P>
          <P attrPara={{ className: 'txt-danger' }}>{Thisis}{Danger}{colortext} <code>.{txt_danger}</code>{spclass}</P>
          <P attrPara={{ className: 'txt-dark' }}>{Thisis}{Dark}{colortext} <code>.{txt_dark}</code>{spclass}</P>
          <P attrPara={{ className: 'txt-primary' }}>{Thisis}{Primary}{colortext} <code>.{txt_primary}</code>{spclass}</P>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColorCard;