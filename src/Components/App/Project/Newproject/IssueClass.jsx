import React, { Fragment } from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { Big, EndingDate, ProjectSize, Medium, StartingDate, Small } from '../../../../Constant';

const IssueClass = (props) => {
    const [startDate, setStartDate] = useState('');
    const { register='' } = props;
    return (
        <Fragment>
            <Row>
                <Col sm="4">
                    <FormGroup>
                        <Label>{ProjectSize}</Label>
                        <Input type="select" name="issues" placeholder="Select Issues" className="form-control digits" {...register('issues',{ required: true })}>
                            <option>{Small}</option>
                            <option>{Medium}</option>
                            <option>{Big}</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col sm="4">
                    <FormGroup className='mb-3'>
                        <Label>{StartingDate}</Label>
                        <DatePicker className="datepicker-here form-control" name='startDate' selected={startDate} onChange={(date) => setStartDate(date)} {...register("startDate", {valueAsDate: true,})} />
                    </FormGroup>
                </Col>
                <Col sm="4">
                    <FormGroup>
                        <Label>{EndingDate}</Label>
                        <DatePicker className="datepicker-here form-control" name='endDate' selected={startDate} onChange={(date) => setStartDate(date)} {...register("endDate", {valueAsDate: true,})} />                       
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    );
};

export default IssueClass;