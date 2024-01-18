import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H1, H3 } from '../../../../AbstractElements';
import { Display, displayHeading, DisplayHeadings, DisplayHeadingsText, DisplayHeadingsText2 } from '../../../../Constant';

const DisplayHeadingCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{DisplayHeadings}</H3>
          <span>{DisplayHeadingsText} <strong>{displayHeading}</strong>{DisplayHeadingsText2}</span>
        </CardHeader>
        <CardBody className="typography">
          <H1 attrH1={{ className: 'display-1' }}>{`${Display} 1`}</H1>
          <H1 attrH1={{ className: 'display-2' }}>{`${Display} 2`}</H1>
          <H1 attrH1={{ className: 'display-3' }}>{`${Display} 3`}</H1>
          <H1 attrH1={{ className: 'display-4' }}>{`${Display} 4`}</H1>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DisplayHeadingCard;