import React, { useState } from 'react';
import { Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { BasicExamplestext, OffsetToTooltip, Popoverbodytext2, PopoverTitle } from '../../../../Constant';
import { OffsetPopoverData } from '../../../../Data/Ui-kit/Data';
import HeaderCard from '../../../Common/Component/HeaderCard';
import CommonPopover from '../common/CommonPopover';

const Offset = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);

  return (
    <Col lg="6">
      <Card>
        <HeaderCard title={OffsetToTooltip} span1={BasicExamplestext} />
        <CardBody className="btn-showcase">
          <Btn attrBtn={{ color: 'primary', className: 'example-popover', id: 'Popover-12' }}>20px 20px</Btn>
          <Popover
            placement='top'
            isOpen={popover}
            target='Popover-12'
            offset={[20, 20]}
            toggle={Toggle}
          >
            <PopoverHeader>{PopoverTitle}</PopoverHeader>
            <PopoverBody>{Popoverbodytext2}</PopoverBody>
          </Popover>
          {OffsetPopoverData.map((popover, i) => {
            return <CommonPopover key={i} item={popover} />
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Offset;