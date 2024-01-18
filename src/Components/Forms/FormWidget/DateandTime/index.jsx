import React, { Fragment } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import { DateTimePicker } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';
import DateTimeForm from './DateTimeForm';

const DateTimeContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={DateTimePicker} parent="Form Widgets" title={DateTimePicker} />
      <Container fluid={true}>
        <Card>
          <HeaderCard title={DateTimePicker} />
          <CardBody>
            <Row>
              <Col md="12">
                <div className="datetime-picker">
                  <DateTimeForm />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};
export default DateTimeContain;