import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Btn,H3 } from '../../../AbstractElements';
import { Cancel, Save,Createtag, FirstNameError, TagName, Tagcolor } from '../../../Constant';

const CreateTag = ({ setTagModal, tagModal }) => {
    const { register, formState:{errors} } = useForm();   

    return (
        <Fragment>
            <Modal className="fade show modal-bookmark" isOpen={tagModal} toggle={()=>{setTagModal(!tagModal)}} size="lg">
                <ModalHeader className="modal-title" toggle={()=>{setTagModal(!tagModal)}}>
                    <div><H3 attrH3={{className:'modal-title'}}>{Createtag}</H3></div>
                </ModalHeader>
                <ModalBody>
                    <Form className="form-bookmark needs-validation">
                        <div className="form-row">
                            <FormGroup className="col-md-12 form-group">
                                <Label>{TagName}</Label>
                                <Input className="form-control" name="name" type="text" {...register('name',{ required: true })} />
                                <span style={{ color: 'red' }}>{errors.name && (`${FirstNameError}`)}</span>
                            </FormGroup>
                            <FormGroup className="col-md-12 form-group mb-0">
                                <Label>{Tagcolor}</Label>
                                <Input className="form-control fill-color" name="color" type="color" {...register('color',{ required: true })} defaultValue="#563d7c" />
                            </FormGroup>
                        </div>
                        <Btn attrBtn={{ color: 'secondary' }} >{Save}</Btn>
                        <Btn attrBtn={{ color: 'primary m-l-5', onClick: ()=>{setTagModal(!tagModal)} }} >{Cancel}</Btn>
                    </Form>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};
export default CreateTag;