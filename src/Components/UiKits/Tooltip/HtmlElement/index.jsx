import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Btn, H3, ToolTip } from '../../../../AbstractElements';
import {  HTMLElements, Tooltipontop } from '../../../../Constant';
import { HtmltooltipData } from '../../../../Data/Ui-kit/Data';
import HtmlContentTooltip from './HtmlContentTooltip';

const HtmlElement = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  const tooltips = <>{'Tooltip'} <b>with</b> <code>HTML</code></>;
 
  return (
    <Col lg="6">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{HTMLElements}</H3>
        </CardHeader>
        <CardBody className="btn-showcase">
          <Btn attrBtn={{ color: 'primary', id: 'Tooltip-5', onClick: toggle }}>{Tooltipontop}</Btn>
          <ToolTip
            attrToolTip={{
              placement: 'top',
              isOpen: tooltip,
              target: 'Tooltip-5',
            }} >
            {tooltips}
          </ToolTip>
          {HtmltooltipData.map((item) =>
            <HtmlContentTooltip key={item.id} item={item} />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlElement;