import React, { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Btn, ToolTip } from '../../../../AbstractElements';
import { Direction, Tooltipontop } from '../../../../Constant';
import { BasictooltipData } from '../../../../Data/Ui-kit/Data';
import HeaderCard from '../../../Common/Component/HeaderCard';
import CommonTooltip from './CommonTooltip';

const Directions = () => {    
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);

  return (
    <Col lg="7">
      <Card>
        <HeaderCard title={Direction} />
        <CardBody className="btn-showcase">
          <Btn attrBtn={{ color: 'primary', id: 'Tooltip-1' }}>{Tooltipontop}</Btn>
          <ToolTip
            attrToolTip={{
              placement: 'top',
              isOpen: tooltip,
              target: 'Tooltip-1',
              toggle: toggle
            }} >
            {Tooltipontop}
          </ToolTip>
          {BasictooltipData.map((item) =>{
            return <CommonTooltip key={item.id} item={item} />
          })}
        </CardBody>
      </Card>
    </Col>
  );
};
export default Directions;