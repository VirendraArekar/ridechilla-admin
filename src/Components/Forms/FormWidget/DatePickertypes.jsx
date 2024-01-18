import React, { Fragment } from 'react'
import DatePicker from 'react-datepicker'
import { Col, Label } from 'reactstrap'
import { DateRange, MaxDate, MinDate, SpecificDateRange } from '../../../Constant'

const DatePickertypes = ({ addDays, endDate, startDate, handleChange }) => {
    return (
        <Fragment>
            <Label className="col-sm-3 col-form-label text-end">{SpecificDateRange}</Label>
            <Col xl='5' sm='9'>
                <div className="form-row min-date">
                    <Col md='12 mb-2' >
                        <DatePicker className="form-control digits"
                            selected={startDate}
                            onChange={handleChange}
                            minDate={new Date()}
                            maxDate={addDays}
                            placeholderText="Select a date between today and 5 days in the future"
                        />
                    </Col>
                    <Col md='12 mb-2' >
                        <Label className="col-sm-3 col-form-label">{MinDate}</Label>
                        <DatePicker className="form-control digits"
                            selected={startDate}
                            onChange={handleChange}
                            minDate={new Date()}
                            placeholderText="Select a date after 5 days ago"
                        />
                    </Col>
                    <Col md='12 mb-2' >
                        <Label className="col-sm-3 col-form-label">{MaxDate}</Label>
                        <DatePicker className="form-control digits"
                            selected={startDate}
                            onChange={handleChange}
                            maxDate={new Date()}
                            placeholderText="Select a date after 5 days ago"
                        />
                    </Col>
                    <Col md="12" className="date-range">
                        <Label className="col-sm-3 col-form-label">{DateRange}</Label>
                        <DatePicker className="form-control digits"
                            selected={startDate}
                            onChange={handleChange}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                        />
                        <DatePicker className="form-control digits mt-2"
                            selected={endDate}
                            onChange={handleChange}
                            selectsEnd
                            endDate={endDate}
                            minDate={startDate}
                        />
                    </Col>
                </div>
            </Col>
        </Fragment>
    )
}

export default DatePickertypes