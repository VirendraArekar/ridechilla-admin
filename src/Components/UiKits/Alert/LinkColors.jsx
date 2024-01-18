import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Alerts, H3,P } from '../../../AbstractElements';
import { alertlink, ClickIt, ExamleLink, Linkcolortext, Linkthemecolor, Usethe } from '../../../Constant';
import { ThemeColorAlertData } from '../../../Data/Ui-kit/Data';

const LinkColors = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{Linkthemecolor}</H3><span>{Usethe} <code>{alertlink}</code> {Linkcolortext}</span>
        </CardHeader>
        <CardBody className="card-body">
          {ThemeColorAlertData.map((data,index) => {
            return (
              <Alerts attrAlert={{ color: `${data.colorClass}` }} key={index}>
                <P>{data.pera}<a className="alert-link" href="#javascript">{ExamleLink}</a>{ClickIt}</P>
              </Alerts>
            )
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinkColors;