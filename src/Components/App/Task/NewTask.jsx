import React, { Fragment, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label } from 'reactstrap';
import { AddTask, TaskTitle, Collection, General, Description, Save, Cancel, NewTask, TitleError, DescError } from '../../../Constant';
import { CheckCircle } from 'react-feather';
import { Btn,H3 } from '../../../AbstractElements';
import TaskContext from '../../../_helper/Task';

const NewTaskClass = () => {
    const { AddNewTask } = useContext(TaskContext);
    const { register, handleSubmit, formState:{errors} } = useForm();
    const [addModal, setaddModal] = useState(false);
   
    const Addtask = data => {
        if (data !== '') {
            AddNewTask(data);
            setaddModal(false);
        } else {
            errors.showMessages();
        }
    };
    return (
        <Fragment>
            <Btn attrBtn={{color:'primary',className:'btn-block btn-mail',onClick:()=>{setaddModal(!addModal)}}}><CheckCircle className="me-2"/>{NewTask}</Btn>
            <Modal isOpen={addModal} toggle={()=>setaddModal(!addModal)} size="lg" className='modal-bookmark'>
                <ModalHeader toggle={()=>setaddModal(!addModal)}>
                    <div><H3 attrH3={{className:'modal-title'}}>{AddTask}</H3></div>
                </ModalHeader>
                <ModalBody>
                    <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(Addtask)}>
                        <div className="form-row">
                            <FormGroup className="form-group col-md-12">
                                <Label htmlFor='task-title'>{TaskTitle}</Label>
                                <input className="form-control" id='task-title' name="title" type="text" {...register('title',{ required: true })} />
                                <span style={{ color: 'red' }}>{errors.title && (`${TitleError}`)}</span>
                            </FormGroup>
                            <FormGroup className="form-group col-md-12">
                                <Label>{Collection}</Label>
                                <select className="form-select js-example-disabled-results" name="collection" {...register('collection',{ required: true })}>
                                    <option value="General">{General}</option>
                                    <option value="Fs">{'Fs'}</option>
                                </select>
                            </FormGroup>
                            <FormGroup className="form-group col-md-12">
                                <Label>{Description}</Label>
                                <textarea className='form-control' name="desc" type="textarea" {...register('desc',{ required: true })}></textarea>
                                <span style={{ color: 'red' }}>{errors.desc && (`${DescError}`)}</span>
                            </FormGroup>
                        </div>
                        <Btn attrBtn={{ color: 'secondary', className: 'me-1' }}>{Save}</Btn>
                        <Btn attrBtn={{ color: 'primary', onClick: ()=>{setaddModal(!addModal)} }} >{Cancel}</Btn>
                    </Form>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};
export default NewTaskClass;