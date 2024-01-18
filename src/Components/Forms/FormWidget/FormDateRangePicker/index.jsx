import React from 'react';
import { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import DateRangedata from './DateRangedata';
import SingleDate from './SingleDate';
import TimeAndDate from './TimeAndDate';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { DateRangePicker } from '../../../../Constant';

const FormDateRangepickerContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle={DateRangePicker} parent="Form Widgets" title={DateRangePicker} />
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Card>
                            <HeaderCard title={DateRangePicker} />
                            <CardBody>
                                <Row className="date-range-picker">
                                    <DateRangedata />
                                    <SingleDate />
                                    <TimeAndDate />
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default FormDateRangepickerContain;