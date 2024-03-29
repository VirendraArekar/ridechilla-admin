import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormGroup, Label } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { BirthDate, HavePassword, Next, No, Yes } from '../../../../Constant'

const Formstep3 = ({ setSteps, setFormdata, formdata }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (data) {
            setFormdata(prev => ({ ...prev, ...data }))
            setSteps(pre => pre + 1);
        }
    }
    return (
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)} className="form-bookmark needs-validation">
                <FormGroup className="mb-3">
                    <Label htmlFor="Bdate">{BirthDate}</Label>
                    <input className={`form-control ${errors.birthday && 'is-invalid'}`} id="Bdate" type="date" name='birthday' defaultValue={formdata.birthday || ""} {...register('birthday', { required: true })} />
                    <span className='text-danger'>{errors.birthday && 'Birth Date is required'}</span>
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label htmlFor="confirmPW">{HavePassword}</Label>
                    <select className={`form-select ${errors.passport && 'is-invalid'}`} name='passport' defaultValue={formdata.passport || ""} {...register("passport", { require: true })}>
                        <option disabled>select..</option>
                        <option value="yes">{Yes}</option>
                        <option value="no">{No}</option>
                    </select>
                    <span className='text-danger'>{errors.passport && 'Select one value.'}</span>
                </FormGroup>
                <div className="text-end">
                    <Btn attrBtn={{ color: 'primary', type: 'submit' }}>{Next}</Btn>
                </div>
            </Form>
        </Fragment>
    )
}

export default Formstep3