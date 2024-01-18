import React, { Fragment, useState } from 'react';
import { Btn, P } from '../../../../../AbstractElements';
import { ModalTitle, scrollmodaltext, VerticallyCentered } from '../../../../../Constant';
import CommonModal from '../../common/modal';

const VerticalBtn = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <Btn attrBtn={{ color: 'primary', onClick: toggle }} >{VerticallyCentered}</Btn>
      <CommonModal isOpen={modal} title={ModalTitle} toggler={toggle} >
        <P>{scrollmodaltext}</P>
      </CommonModal>
    </Fragment>
  );
};

export default VerticalBtn;