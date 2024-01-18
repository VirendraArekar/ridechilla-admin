import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H4, H3, P } from '../../../AbstractElements';
import Alerts from '../../../CommonElements/Alert';
import { AdditionalContent, Additionaltext, Aditionalpara, Aditionalpara2, Welldone } from '../../../Constant';

const AdditionalContents = () => {

  return (
    <Col sm="12">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{AdditionalContent}</H3>
          <span>{Additionaltext}</span>
        </CardHeader>
        <CardBody className="card-body">
          <Alerts attrAlert={{ color: 'primary ' }} >
            <H4 attrH4={{ className: 'alert-heading' }} >{Welldone}</H4>
            <P>{Aditionalpara}</P>
            <hr />
            <P attrPara={{ className: 'mb-0' }}>{Aditionalpara2}</P>
          </Alerts>
          <Alerts attrAlert={{ color: 'secondary' }} >
            <H4 attrH4={{ className: 'alert-heading' }}>{Welldone}</H4>
            <P>{Aditionalpara}</P>
            <hr />
            <P attrPara={{ className: 'mb-0' }}>{Aditionalpara2}</P>
          </Alerts>
          <Alerts attrAlert={{ color: 'success' }} >
            <H4 attrH4={{ className: 'alert-heading' }}>{Welldone}</H4>
            <P>{Aditionalpara}</P>
            <hr />
            <P attrPara={{ className: 'mb-0' }} >{Aditionalpara2}</P>
          </Alerts>
          <Alerts attrAlert={{ color: 'danger' }} >
            <H4 attrH4={{ className: 'alert-heading' }}>{Welldone}</H4>
            <P>{Aditionalpara}</P>
            <hr />
            <P attrPara={{ className: 'mb-0' }} >{Aditionalpara2}</P>
          </Alerts>
          <Alerts attrAlert={{ color: 'info' }} >
            <H4 attrH4={{ className: 'alert-heading' }}>{Welldone}</H4>
            <P>{Aditionalpara}</P>
            <hr />
            <P attrPara={{ className: 'mb-0' }} >{Aditionalpara2}</P>
          </Alerts>
          <Alerts attrAlert={{ color: 'light' }} >
            <H4 attrH4 className="alert-heading">{Welldone}</H4>
            <P>{Aditionalpara}</P>
            <hr />
            <P attrPara={{ className: 'mb-0' }} >{Aditionalpara2}</P>
          </Alerts>
          <Alerts attrAlert={{ color: 'dark' }} >
            <H4 attrH4={{ className: 'alert-heading' }} >{Welldone}</H4>
            <P>{Aditionalpara}</P>
            <hr />
            <P attrPara={{ className: 'mb-0' }} >{Aditionalpara2}</P>
          </Alerts>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AdditionalContents;