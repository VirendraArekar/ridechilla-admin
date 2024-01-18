import React, { Fragment } from 'react';
import { Col, FormGroup, Label } from 'reactstrap';
import { EnterSomeDetails } from '../../../../Constant';

const EnterSomeDetailsClass = ({register,errors}) => {
    return (
        <Fragment>
            <Col>
                <FormGroup>
                    <Label>{EnterSomeDetails}</Label>
                    <input type="textarea" className="form-control" name="description" rows="3" style={{height:'120px'}} {...register('description',{ required: true })} />
                    <span className='text-danger'>{errors.description && 'Some Details is required'}</span>
                </FormGroup>
            </Col>
        </Fragment>
    );
};

export default EnterSomeDetailsClass;