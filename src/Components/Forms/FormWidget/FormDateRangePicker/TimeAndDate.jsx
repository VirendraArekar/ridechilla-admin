import React, { useState } from 'react';
import { Fragment } from 'react';
import { H6, P } from '../../../../AbstractElements';
import DatePicker from 'react-datepicker';
import { Col, FormGroup } from 'reactstrap';
import { DateAndTime, DateTimeText } from '../../../../Constant';

const TimeAndDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Fragment>
            <Col lg="12">
                <div className="daterange-card">
                    <H6 attrH6={{ className: 'sub-title' }}>{DateAndTime}</H6>
                    <P>{DateTimeText}</P>
                    <div className="theme-form">
                        <FormGroup >
                            <DatePicker
                                className="form-control digits"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                monthsShown={2}
                                showYearDropdown
                                showTimeSelect
                                dateFormat="MMMM d, yyyy h:mm aa"
                            />
                        </FormGroup>
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};
export default TimeAndDate;