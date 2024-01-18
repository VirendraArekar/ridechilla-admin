import React, { useState } from 'react';
import { Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { BasicExamplestext, HTMLContent, Popoverontop, PopoverTitle } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';
import CommonPopover from '../common/CommonPopover';

const HtmlContents = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  const Popoverbody = <>{'Just add'} <code>{'data-html=\'true\''}</code>{'attribute and you can purse'}<span style={{ marginLeft: '3px', marginRight: '3px' }}><b>{'html'}</b></span>{'code'}</>;
  const HtmlData = [
    {
      id: 8,
      placement: 'right',
      Popoverbody: Popoverbody,
      btncolor: 'primary',
      btntext: 'Popover on right'
    },
    {
      id: 9,
      placement: 'bottom',
      Popoverbody: Popoverbody,
      btncolor: 'primary',
      btntext: 'Popover on bottom'
    },
    {
      id: 10,
      placement: 'left',
      Popoverbody: Popoverbody,
      btncolor: 'primary',
      btntext: 'Popover on left'
    },
  ];
  return (
    <Col lg="6">
      <Card>
        <HeaderCard title={HTMLContent} span1={BasicExamplestext} />
        <CardBody className="btn-showcase">
          <Btn attrBtn={{ color: 'primary', className: 'example-popover', id: 'Popover-8' }}>{Popoverontop}</Btn>
          <Popover
            placement='top'
            isOpen={popover}
            target='Popover-8'
            toggle={Toggle}
          >
            <PopoverHeader>{PopoverTitle}</PopoverHeader>
            <PopoverBody>
              {Popoverbody}
            </PopoverBody>
          </Popover>
          {HtmlData.map((popover) => {
            return <CommonPopover key={popover.id} item={popover} />;
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlContents;