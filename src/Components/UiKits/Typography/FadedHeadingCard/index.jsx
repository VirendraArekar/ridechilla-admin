import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H3 } from '../../../../AbstractElements';
import { FadeHeadingtext, Fancyheading, Fancyheadingtext, Headings } from '../../../../Constant';

const FadedHeadingCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{Headings}</H3>
          <span>{FadeHeadingtext}  </span>
        </CardHeader>
        <CardBody className="typography">
          <H3>{Fancyheading}<small className="text-muted">{Fancyheadingtext}</small></H3>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FadedHeadingCard;