import React, { Fragment, useContext } from 'react';
import { Btn } from '../../../../AbstractElements';
import { useForm } from 'react-hook-form';
import ContactAppContext from '../../../../_helper/Contact';
import { Row, Col, Label, FormGroup, Form } from 'reactstrap';
import { Name, Age, Mobile, Save, Cancel, Email } from '../../../../Constant';

const UpdateUser = ({ editdata, userEditCallback, editurl }) => {
    const { editUser } = useContext(ContactAppContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const UpdateContact = data => {
        if (data !== '') {
            editUser(data, editurl, editdata.id);
            userEditCallback(false, data, editurl, true);
        } else {
            errors.showMessages();
        }
    };
    return (
        <Fragment>
            <div className="contact-editform ps-0 m-auto">
                <Form onSubmit={handleSubmit(UpdateContact)}>
                    <div className="form-row">
                        <FormGroup className="col-md-12">
                            <Label>{Name}</Label>
                            <Row>
                                <Col sm="6">
                                    <input className="form-control" type="text" name="name" defaultValue={editdata.name} {...register('name', { required: true })} />
                                    <span style={{ color: 'red' }}>{errors.name && 'First name is required'}</span>
                                </Col>
                                <Col sm="6">
                                    <input className="form-control" type="text" name="surname" defaultValue={editdata.surname} {...register('surname', { required: true })} />
                                    <span style={{ color: 'red' }}>{errors.surname && 'Last name is required'}</span>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup className="col-md-12">
                            <Label>{Email}</Label>
                            <input className="form-control" type="text" name="email" defaultValue={editdata.email} {...register('email', { required: true, })} />
                            <span style={{ color: 'red' }}>{errors.email && 'Please enter valid email.'}</span>
                        </FormGroup>
                        <FormGroup className="col-md-12">
                            <Row>
                                <Col className='col-md-6'>
                                    <Label>{Age}</Label>
                                    <input className="form-control" type="number" name="age" defaultValue={editdata.age} {...register('age', { pattern: /\d+/, minlength: 18, maxlength: 59 })} />
                                    <span style={{ color: 'red' }}>{errors.age && '*Please enter Valid Age under 18 to 59'}</span>
                                </Col>
                                <Col className='col-md-6'>
                                    <Label>{Mobile}</Label>
                                    <input className="form-control" type="number" name="mobile" defaultValue={editdata.mobile} {...register('mobile', { pattern: /\d+/, minlength: 0, maxlength: 9 })} />
                                    <span style={{ color: 'red' }}>{errors.mobile && 'Please enter number max 9 digit'}</span>
                                </Col>
                            </Row>
                        </FormGroup>
                    </div>
                    <Btn attrBtn={{ color: 'secondary', className: 'update-contact me-1' }} >{Save}</Btn>
                    <Btn attrBtn={{ color: 'primary', onClick: () => userEditCallback(false) }} >{Cancel}</Btn>
                </Form>
            </div>
        </Fragment>
    );
};

export default UpdateUser;