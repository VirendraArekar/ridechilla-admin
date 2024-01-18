import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormGroup, Label } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { City, Finish, State } from '../../../../Constant'

const Formstep4 = ({ setSteps, setFormdata, formdata }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data) {
            setFormdata(prev => ({ ...prev, ...data }))
            alert('Your Form is Submited');
        }
    }
    return (
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)} className="form-bookmark needs-validation">
                <FormGroup className="mb-3">
                    <Label htmlFor="State">{State}</Label>
                    <input className={`form-control ${errors.state && 'is-invalid'}`} id="State" type="text" name='state' defaultValue={formdata.state || ""} {...register('state', { required: true })} />
                    <span className='text-danger'>{errors.state && 'State name is required'}</span>
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label htmlFor="City">{City}</Label>
                    <input className={`form-control ${errors.city && 'is-invalid'}`} id="City" type="text" name='city' defaultValue={formdata.city || ""} {...register('city', { required: true })} />
                    <span className='text-danger'>{errors.city && 'City Name is Required'}</span>
                </FormGroup>
                <div className="text-end">
                    <Btn attrBtn={{ color: 'success', type: 'submit' }}>{Finish}</Btn>
                </div>
            </Form>
        </Fragment>
    )
}

export default Formstep4