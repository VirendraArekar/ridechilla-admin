import React, { Fragment } from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';
import { ClientName } from '../../../../Constant';

const ClientNameClass = (props) => {
    const { register = '', errors = '' } = props
    return (
        <Fragment>
            <Col>
                <FormGroup>
                    <Label>{ClientName}</Label>
                    <Input className="form-control" type="text" name="client_name" placeholder="Name client or company name" {...register('client_name', { required: true })} />
                    <span style={{ color: 'red' }}>{errors.client_name && 'Client Name is required'}</span>
                </FormGroup>
            </Col>
        </Fragment>
    );
};

export default ClientNameClass;