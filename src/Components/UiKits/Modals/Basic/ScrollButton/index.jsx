import React, { Fragment, useState } from 'react';
import { Btn, P } from '../../../../../AbstractElements';
import { ModalTitle, ScrollingLongContent, scrollmodaltext, scrollmodaltext1, scrollmodaltext2 } from '../../../../../Constant';
import CommonModal from '../../common/modal';

const ScrollBtn = () => {
  const [scrollingmodal, setscrollingModal] = useState(false);
  const Scrollmodaltoggle = () => setscrollingModal(!scrollingmodal);
  return (
    <Fragment>
      <Btn attrBtn={{ color: 'primary', onClick: Scrollmodaltoggle }} >{ScrollingLongContent}</Btn>
      <CommonModal isOpen={scrollingmodal} title={ModalTitle} toggler={Scrollmodaltoggle} >
        <P>{scrollmodaltext}</P>
        <P>{scrollmodaltext1}</P>
        <P>{scrollmodaltext2}</P>
        <P>{scrollmodaltext}</P>
        <P>{scrollmodaltext1}</P>
        <P>{scrollmodaltext2}</P>
        <P>{scrollmodaltext}</P>
        <P>{scrollmodaltext1}</P>
        <P>{scrollmodaltext2}</P>
        <P>{scrollmodaltext}</P>
        <P>{scrollmodaltext1}</P>
        <P>{scrollmodaltext2}</P>
        <P>{scrollmodaltext}</P>
        <P>{scrollmodaltext1}</P>
        <P>{scrollmodaltext2}</P>
        <P>{scrollmodaltext}</P>
        <P>{scrollmodaltext1}</P>
        <P>{scrollmodaltext2}</P>
      </CommonModal>
    </Fragment>
  );
};

export default ScrollBtn;