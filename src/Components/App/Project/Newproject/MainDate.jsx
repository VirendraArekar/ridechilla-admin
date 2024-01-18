import React, { Fragment, useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import { FormGroup, Label } from 'reactstrap';

const MainDate = (props) => {
    const { StartingDate = '', EndingDate = '' } = props;
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const handleStartDate = date => {
        setstartDate(date);
    };
    const handleEndDate = date => {
        setendDate(date);
    };
  return (
    <Fragment> 
        {
            StartingDate ?
                <FormGroup>
                    <Label>{StartingDate}</Label>
                    <ReactDatePicker className="datepicker-here form-control" selected={startDate} onChange={handleStartDate} />
                </FormGroup>
                :
                <FormGroup>
                    <Label>{EndingDate}</Label>
                    <ReactDatePicker className="datepicker-here form-control" selected={endDate} endDate={endDate} onChange={handleEndDate} />
                </FormGroup>
            }
    </Fragment>
  )
}

export default MainDate