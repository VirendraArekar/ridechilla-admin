import React, { Fragment, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Label, Button, Modal, ModalBody, ModalHeader, Row, Col } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { AddBookmark, Cancel, Collection, Description, General, Group, MyBookmarks, Save, Title, WebUrl } from '../../../Constant';
import BookmarkContext from '../../../_helper/Bookmark';

const BookmarkModal = ({ value, addToggle, addToggleCallback }) => {
    const { addNewBookmark } = useContext(BookmarkContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit1 = (data) => {
        if (data !== '') {
            addNewBookmark(data, 'lightgallry/01.jpg');
            addToggleCallback(addToggle);
        } else {
            errors.showMessages();
        }
    };
    return (
        <Fragment>
            <Modal className='modal-bookmark' isOpen={value} toggle={addToggle} size="lg">
                <ModalHeader>
                    {AddBookmark}
                    <Btn attrBtn={{ color: 'transprant btn-close', onClick: addToggle, arialabel: "Close", databsdismiss: "modal" }}></Btn>
                </ModalHeader>
                <ModalBody>
                    <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmit1)}>
                        <div className="form-row">
                            <FormGroup className="form-group col-md-12">
                                <Label>{WebUrl}</Label>
                                <input
                                    className="form-control"
                                    name="url"
                                    type="text"
                                    autoComplete="off"
                                    invalid={errors.url && true}
                                    {...register('url', { required: true })}
                                />
                            </FormGroup>
                            <FormGroup className="form-group col-md-12">
                                <Label>{Title}</Label>
                                <input
                                    className="form-control"
                                    name="title"
                                    type="text"
                                    invalid={errors.title && true}
                                    autoComplete="off"
                                    {...register('title', { required: true })}
                                />
                            </FormGroup>
                            <FormGroup className="form-group col-md-12">
                                <Label>{Description}</Label>
                                <input
                                    className="form-control"
                                    name="desc"
                                    type="textarea"
                                    invalid={errors.desc && true}
                                    autoComplete="off"
                                    {...register('desc', { required: true })}
                                />
                            </FormGroup>
                            <FormGroup className="form-group col-md-12">
                                <Row>
                                    <Col>
                                        <Label>{Group}</Label>
                                        <select className="form-control digits" name="group">
                                            <option value="bookmark">{MyBookmarks}</option>
                                        </select>
                                    </Col>
                                    <Col>
                                        <Label>{Collection}</Label>
                                        <select className=" form-control digits" name="collection">
                                            <option value="general">{General}</option>
                                            <option value="fs">{'fs'}</option>
                                        </select>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </div>
                        <Btn attrBtn={{ color: 'secondary', type: 'submit' }} >{Save}</Btn>
                        <Btn attrBtn={{ color: 'primary ms-2', onClick: addToggle }} >{Cancel}</Btn>
                    </Form>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};
export default BookmarkModal;