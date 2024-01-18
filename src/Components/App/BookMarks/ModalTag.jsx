import React, { Fragment } from 'react';
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Cancel, CreateTag, Save, TagName } from '../../../Constant';

const ModalTag = (props) => {
    return (
        <Fragment>
            <Modal className="fade show modal-bookmark" size="lg" isOpen={props.value} toggle={props.tagToggle}>
                <ModalHeader className="modal-title" >
                    {CreateTag}
                    <Btn attrBtn={{ color: 'transprant btn-close', onClick: () => { props.tagToggle }, arialabel: 'Close' }}></Btn>
                </ModalHeader>
                <ModalBody>
                    <Form className="form-bookmark needs-validation">
                        <div className="form-row">
                            <FormGroup className="form-group col-md-12">
                                <Label>{TagName}</Label>
                                <Input type="text" />
                            </FormGroup>
                            <FormGroup className="form-group col-md-12 mb-0">
                                <Label>{'Tag color'}</Label>
                                <Input className='fill-color' type="color" defaultValue="#563d7c" />
                            </FormGroup>
                        </div>
                        <Btn attrBtn={{ color: 'secondary', onClick: props.tagToggle }}>{Save}</Btn>
                        <Btn attrBtn={{ color: 'primary m-l-5', onClick: props.tagToggle }}>{Cancel}</Btn>
                    </Form>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};
export default ModalTag;