import React from 'react';
import { Card, CardBody, Col, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Btn, P, H3 } from '../../../../AbstractElements';
import { Close, Modalcontent, NewMessage, SendMessage, StaticExample } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const StaticModal = () => {
  return (
    <Col sm="12">
      <Card>
        <HeaderCard title={StaticExample} />
        <CardBody>
          <div className="modal-dialog modal-lg static-modal mt-0 mb-0">
            <div className="modal-dialog mt-0 mb-0">
              <div className='modal-content'>
                <ModalHeader>
                  <div>
                    <H3 attrH3={{ className: 'mb-0' }}>{NewMessage}</H3>
                    <button className='btn btn-close'></button>
                  </div>
                </ModalHeader>
                <ModalBody>
                  <P>{Modalcontent}</P>
                </ModalBody>
                <ModalFooter>
                  <Btn attrBtn={{ color: "secondary" }}>{Close}</Btn>
                  <Btn attrBtn={{ color: "primary", className: 'ms-2' }}>{SendMessage}</Btn>
                </ModalFooter>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StaticModal;