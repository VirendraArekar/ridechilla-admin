import { NewContacts, AddContacts, Name, Save, Cancel, Phone, EmailAddress, Age } from '../../../../Constant';
import defaultuser from '../../../../assets/images/user/user.png';
import { Btn, H3 } from '../../../../AbstractElements';
import ContactAppContext from '../../../../_helper/Contact';
import React, { Fragment, useContext, useState } from 'react';
import { Users } from 'react-feather';
import { Row, Col, Modal, ModalHeader, ModalBody, Label, FormGroup, Form } from 'reactstrap';
import { useForm } from 'react-hook-form';

const CreateContact = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(ContactAppContext);

    const AddContact = data => {
        if (data !== '') {
            createUser(data, defaultuser);
            setModal(false);
        } else {
            errors.showMessages();
        }
    };
    return (
        <Fragment>
            <Btn attrBtn={{ className: 'btn-block btn-mail w-100', color: 'primary', onClick: toggle }} >
                <Users className="me-2" />{NewContacts}
            </Btn>
            <Modal isOpen={modal} toggle={toggle} size="lg" className='modal-bookmark rounded-3'>
                <ModalHeader toggle={toggle}>
                    <div><H3 attrH3={{ className: 'modal-title', id: 'exampleModalLabel' }}>{AddContacts}</H3></div>
                </ModalHeader>
                <ModalBody>
                    <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddContact)}>
                        <div className="row g-2">
                            <FormGroup className="col-md-12 mt-0">
                                <Label>{Name}</Label>
                                <Row>
                                    <Col sm="6">
                                        <input className="form-control" name="name" placeholder='First Name' type="text" {...register('name', { required: true })} />
                                        <span style={{ color: 'red' }}>{errors.name && 'First name is required'}</span>
                                    </Col>
                                    <Col sm="6">
                                        <input className="form-control" placeholder='Last Name' name="surname" type="text" {...register('surname', { required: true })} />
                                        <span style={{ color: 'red' }}>{errors.surname && 'Last name is required'}</span>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup className="col-md-12 mt-0">
                                <Label className='text-capitalize'>{EmailAddress}</Label>
                                <input className="form-control" name="email" type="text" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                                <span style={{ color: 'red' }}>{errors.email && 'Please enter age between 18 to 70 year.'}</span>
                            </FormGroup>
                            <FormGroup className="col-md-12 mt-0">
                                <Row>
                                    <Col sm={6}>
                                        <Label>{Age}</Label>
                                        <input className="form-control" name="age" type="number" {...register('age', { pattern: /\d+/, minlength: 18, maxlength: 59 })} />
                                        <span style={{ color: 'red' }}>{errors.age && '*Please enter valid age (18 to 59)'}</span>
                                    </Col>
                                    <Col sm={6}>
                                        <Label>{Phone}</Label>
                                        <input className="form-control" name="mobile" type="number" {...register('mobile', { pattern: /\d+/, minlength: 0, maxlength: 9 })} />
                                        <span style={{ color: 'red' }}>{errors.mobile && 'Please enter number max 9 digit'}</span>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </div>
                        <Btn attrBtn={{ color: 'secondary', className: 'me-1' }} >{Save}</Btn>
                        <Btn attrBtn={{ color: 'primary', onClick: toggle }} >{Cancel}</Btn>
                    </Form>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};

export default CreateContact;