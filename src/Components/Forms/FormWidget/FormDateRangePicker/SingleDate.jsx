import React, { useState } from 'react';
import { Fragment } from 'react';
import { H6, P } from '../../../../AbstractElements';
import DatePicker from 'react-datepicker';
import { Col, FormGroup } from 'reactstrap';
import { and, Apply, autoUpdateInput, Cancel, eventsd, InputEmptyteaxt, InputEmptyteaxt2, InputInitiallyEmpty, SingleDatePicker, SingleDateText } from '../../../../Constant';

const SingleDate = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [startDate1, setStartDate1] = useState(new Date());
    const handleChange = (date) => {
        setStartDate1(date)
        var today = new Date();
        var birthDate = new Date(date);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        alert('Your Age is => ' + age);
    };
    return (
        <Fragment>
            <Col xl="6">
                <div className="daterange-card">
                    <H6 attrH6={{ className: 'sub-title' }}>{SingleDatePicker}</H6>
                    <P>{SingleDateText}</P>
                    <div className="theme-form">
                        <FormGroup >
                            <DatePicker
                                className="form-control digits"
                                selected={startDate1}
                                onChange={handleChange}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                        </FormGroup>
                    </div>
                </div>
            </Col>
            <Col xl="6">
                <div className="daterange-card">
                    <H6 attrH6={{ className: 'sub-title' }}>{InputInitiallyEmpty}</H6>
                    <P>{InputEmptyteaxt} <code>{autoUpdateInput}</code>{InputEmptyteaxt2}<code>{Apply}</code> {and} <code>{Cancel}</code> {eventsd}</P>
                    <div className="theme-form">
                        <FormGroup >
                            <DatePicker
                                className="form-control digits"
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(update) => {
                                    setDateRange(update);
                                }}
                                isClearable={true}
                                monthsShown={2}
                            />
                        </FormGroup>
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};
export default SingleDate;