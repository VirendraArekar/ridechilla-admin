import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormGroup } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { Next } from '../../../../Constant'

const Formstep1 = ({ setSteps, setFormdata, formdata }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setFormdata(prev => ({ ...prev, ...data }))
        setSteps(prev => prev + 1)
    }
    return (
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)} className="form-bookmark needs-validation">
                <FormGroup className="mb-3">
                    <input className={`form-control ${errors.firstName && 'is-invalid'} mb-1`} placeholder='First name...' type="text" name='firstname' defaultValue={formdata.firstName || ""} {...register('firstName', { required: true })} />
                    <span className='text-danger'>{errors.firstName && 'First name is required'}</span>
                </FormGroup>
                <FormGroup className="mb-3">
                    <input className={`form-control ${errors.lastname && 'is-invalid'} mb-1`} placeholder='Last name...' type="text" name='lastname' defaultValue={formdata.lastname || ""} {...register('lastname', { required: true })} />
                    <span className='text-danger'>{errors.lastname && 'Last name is required'}</span>
                </FormGroup>
                <div className="text-end btn-mb">
                    <Btn attrBtn={{ color: 'primary' }}>{Next}</Btn>
                </div>
            </Form>
        </Fragment>
    )
}
export default Formstep1