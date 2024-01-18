import React, { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Btn, ToolTip } from '../../../../AbstractElements';
import { Offsets, Tooltiptitle } from '../../../../Constant';
import { OffsetTooltipData } from '../../../../Data/Ui-kit/Data';
import HeaderCard from '../../../Common/Component/HeaderCard';
import OffsetTooltip from './OffsetsTooltip';

const Offset = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  
  return (
    <Col lg="6">
      <Card>
        <HeaderCard title={Offsets} />
        <CardBody className="btn-showcase">
          <Btn attrBtn={{ color: 'primary', id: 'Tooltip-9', onClick: toggle }}>20px 20px</Btn>
          <ToolTip
            attrToolTip={{
              placement: 'top',
              isOpen: tooltip,
              target: 'Tooltip-9',
              toggle: toggle,
              offset: [20,20]
            }} >
            {Tooltiptitle}
          </ToolTip>
          {OffsetTooltipData.map((item) => {
            return <OffsetTooltip key={item.id} item={item} />
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Offset;