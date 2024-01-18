import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label } from 'reactstrap';
import { DatePickers, SelectDateWithTime, CustomDateFormat, TodayButton, DisableDaysOfWeek, InlineVersion, DisableDatepicker, SelectTimeOnly, Default } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';
import DatePicker from 'react-datepicker';
import { Breadcrumbs } from '../../../AbstractElements';
import DatePickertypes from './DatePickertypes';

const Datepicker = () => {
  const [startDate, setstartDate] = useState(new Date());
  const endDate = new Date();
  const handleChange = date => {
    setstartDate(date);
  };
  const addDays = date => {
    setstartDate(date, 4);
  };
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Date Picker' parent="Form Widgets" title="Date Picker" />
      <Container fluid={true}>
        <Card>
          <HeaderCard title={DatePickers} />
          <CardBody>
            <Row>
              <Col md="12">
                <div className="date-picker">
                  <Form className="theme-form">
                    <FormGroup className="mb-3 row g-3">
                      <Label className="col-sm-3 col-form-label text-end">{Default}</Label>
                      <Col xl='5' sm='9'>
                        <div className="input-group">
                          <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} />
                        </div>
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-3 row g-3">
                      <Label className="col-sm-3 col-form-label text-end">{SelectDateWithTime}</Label>
                      <Col xl='5' sm='9'>
                        <DatePicker className="form-control digits" showPopperArrow={false} selected={startDate} showTimeSelect dateFormat="Pp" />
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-3 row g-3">
                      <Label className="col-sm-3 col-form-label text-end">{SelectTimeOnly}</Label>
                      <Col xl='5' sm='9'>
                        <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} showTimeSelect
                          showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-3 row g-3">
                      <Label className="col-sm-3 col-form-label text-end">{CustomDateFormat}</Label>
                      <Col xl='5' sm='9'>
                        <DatePicker className="form-control digits" dateFormat="yyyy/MM/dd" selected={startDate} onChange={handleChange} />
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-3 row g-3">
                      <Label className="col-sm-3 col-form-label text-end">{TodayButton}</Label>
                      <Col xl='5' sm='9'>
                        <DatePicker className="form-control digits" todayButton="Vandaag" selected={startDate} onChange={handleChange} />
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-3 row g-3">
                      <Label className="col-sm-3 col-form-label text-end">{DisableDaysOfWeek}</Label>
                      <Col xl='5' sm='9'>
                        <DatePicker className="form-control digits" placeholderText="Click to select a date" />
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-3 row g-3">
                      <DatePickertypes addDays={addDays} endDate={endDate} startDate={startDate} handleChange={handleChange} />
                    </FormGroup>
                    <FormGroup className="mb-3 row g-3">
                      <Label className="col-sm-3 col-form-label text-end">{DisableDatepicker}</Label>
                      <Col sm="3">
                        <div className="datepicker-here" data-language="en">
                          <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} disabled placeholderText="This is disabled" />
                        </div>
                      </Col>
                    </FormGroup>
                    <FormGroup className="row m-0 g-3">
                      <Label className="col-sm-3 col-form-label text-end">{InlineVersion}</Label>
                      <Col sm='3'>
                        <div className="datepicker-here" data-language="en">
                          <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} inline />
                        </div>
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};
export default Datepicker;