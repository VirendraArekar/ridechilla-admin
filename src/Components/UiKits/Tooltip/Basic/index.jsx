import React, { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Btn, ToolTip } from '../../../../AbstractElements';
import { BasicTooltip, HoverMe, PopoverTitle } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const Basic = () => {
  const [basictooltip, setbasictooltip] = useState(false);
  const toggle = () => setbasictooltip(!basictooltip);
  return (
    <Col lg="5">
      <Card>
        <HeaderCard title={BasicTooltip} />
        <CardBody className="btn-showcase">
          <Btn attrBtn={{ color: 'primary', id: 'TooltipExample' }}>{HoverMe}</Btn>
          <ToolTip
            attrToolTip={{
              placement: 'top',
              isOpen: basictooltip,
              target: 'TooltipExample',
              toggle: toggle
            }} >
            {PopoverTitle}
          </ToolTip>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;