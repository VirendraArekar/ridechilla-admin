import React, { Fragment, useRef } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Cancel, PrintViews, Print } from '../../../../Constant';
import PrintPreview from '../PrintPreview';
import ReactToPrint from 'react-to-print';
import { Btn,H3 } from '../../../../AbstractElements';

const PrintModal = ({ printmodal, selectedUser, toggleCallback }) => {
    const printModalToggle = () => {
        toggleCallback(false);
    };
    const componentRef = useRef();
    return (
        <Fragment>            
            <Modal className='modal-bookmark' centered={true} isOpen={printmodal} toggle={printModalToggle} >
                <ModalHeader toggle={printModalToggle}>
                    <div><H3 attrH3={{className:'modal-title'}}>{PrintViews}</H3></div>
                </ModalHeader>
                <ModalBody className="list-persons">
                    <PrintPreview selectedUser={selectedUser} />
                    <ReactToPrint
                        trigger={() => (
                            <Btn attrBtn={{ color: 'secondary', className: 'me-1' }} >
                                {Print}
                            </Btn>
                        )}
                        content={() => componentRef.current}
                        />
                    <Btn attrBtn={{ color: 'primary', onClick: printModalToggle }} >{Cancel}</Btn>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};
export default PrintModal;