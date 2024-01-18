import React, { useState } from 'react';
import { Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { BasicExamplestext, Direction, Popoverbodytext2, Popoverontop, PopoverTitle } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { DirectionData } from '../../../../Data/Ui-kit/Data';
import CommonPopover from '../common/CommonPopover';

const Directions = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);

  return (
    <Col lg="6">
      <Card>
        <HeaderCard title={Direction} span1={BasicExamplestext} />
        <CardBody className="btn-showcase">
          <Btn attrBtn={{ color: 'primary', className: 'example-popover', id: 'Popover-4' }}>{Popoverontop}</Btn>
          <Popover
            placement='top'
            isOpen={popover}
            target='Popover-4'
            toggle={Toggle}
          >
            <PopoverHeader>{PopoverTitle}</PopoverHeader>
            <PopoverBody>{Popoverbodytext2}</PopoverBody>
          </Popover>
          {DirectionData.map((popover) => {
            return <CommonPopover key={popover.id} item={popover} />
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Directions;