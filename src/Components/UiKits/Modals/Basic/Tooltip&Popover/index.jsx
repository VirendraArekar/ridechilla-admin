import React, { Fragment, useState } from 'react';
import { Tooltip } from 'reactstrap';
import { Btn, H5, P } from '../../../../../AbstractElements';
import { Button, buttontext, ModalTitle, Popovermodal, thatlink, thatlinktext, This, Thisisbutton, ThisisLink, TooltipsAndPopovers, Tooltipsmodal } from '../../../../../Constant';
import CommonModal from '../../common/modal';

const TooltipModal = () => {
  const [tooltippopover, setTooltipPopover] = useState(false);
  const Tooltippopovermodaltoggle = () => setTooltipPopover(!tooltippopover);
  const [tooltipBtn, setTooltipBtn] = useState(false);
  const toggleBtn = () => setTooltipBtn(!tooltipBtn);
  const [tooltipLink, setTooltipLink] = useState(false);
  const toggleLink = () => setTooltipLink(!tooltipLink);
  return (
    <Fragment>
      <Btn attrBtn={{ color: 'primary', onClick: Tooltippopovermodaltoggle }} >{TooltipsAndPopovers}</Btn>
      <CommonModal isOpen={tooltippopover} title={ModalTitle} toggler={Tooltippopovermodaltoggle} >
        <H5>{Popovermodal}</H5>
        <P>{This} <Btn attrBtn={{ color: 'primary popover-test', id: 'TooltipButtonExample' }}>{Button}</Btn>  {buttontext}</P>
        <Tooltip placement="right" isOpen={tooltipBtn} target="TooltipButtonExample" toggle={toggleBtn}>
          {Thisisbutton}
        </Tooltip>
        <hr />
        <H5>{Tooltipsmodal}</H5>
        <P><a className="tooltip-test" href="#javascript" id="TooltipLinkExample" >{thatlink}</a> {thatlinktext}</P>
        <Tooltip placement="right" isOpen={tooltipLink} target="TooltipLinkExample" toggle={toggleLink}>
          {ThisisLink}
        </Tooltip>
      </CommonModal>
    </Fragment>
  );
};

export default TooltipModal;