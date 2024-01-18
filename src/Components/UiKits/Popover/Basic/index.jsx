import React, { useState } from 'react';
import { Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { BasicExamples, BasicExamplestext, Clicktotogglepopover, Popoverbodytext, PopoverTitle } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { BasicPopoverData } from '../../../../Data/Ui-kit/Data';
import CommonPopover from '../common/CommonPopover';

const Basic = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);

  return (
    <Col lg="6">
      <Card>
        <HeaderCard title={BasicExamples} span1={BasicExamplestext} />
        <CardBody className="btn-showcase">
          <Btn attrBtn={{ color: 'primary', className: 'example-popover', id: 'Popover-1' }}>{Clicktotogglepopover}</Btn>
          <Popover
            placement='right'
            isOpen={popover}
            target='Popover-1'
            toggle={Toggle}
          >
            <PopoverHeader>{PopoverTitle}</PopoverHeader>
            <PopoverBody>{Popoverbodytext}</PopoverBody>
          </Popover>
          {BasicPopoverData.map((popover,i) => {
            return <CommonPopover key={i} item={popover} />;
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;