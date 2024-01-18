import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H3, P } from '../../../../AbstractElements';
import { deltext, emtext, highlight, Inlinetext, Inlinetext2, Inlinetextelements, instext, smalltext, stext, strongtext, textd, utext } from '../../../../Constant';

const InlineTextCard = () =>{
    return(
      <Col sm="12" xl="6">
        <Card>
          <CardHeader className='pb-0'>
            <H3>{Inlinetextelements}</H3>
            <span>{Inlinetext}</span>
          </CardHeader>
          <CardBody>
            <P>{Inlinetext2}<mark>{highlight}</mark>{textd}</P>
            <P><del>{deltext}</del></P>
            <P><s>{stext}</s></P>
            <P><ins>{instext}</ins></P>
            <P><u>{utext}</u></P>
            <P><small>{smalltext}</small></P>
            <P><strong>{strongtext}</strong></P>
            <P><em>{emtext}</em></P>
          </CardBody>
        </Card>
      </Col>
    );
};

export default InlineTextCard;