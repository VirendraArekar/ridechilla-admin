import React, { Fragment, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DataWidgets = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = date => {
        setStartDate(date)
    };
    return (
        <Fragment>
            <Col xxl="3" xl="6" md="6" className="cols-xl-25 box-col-6">
                <Card className="general-cal">
                    <CardBody className="cal-date-widget">
                        <div className="cal-datepicker">
                            <div className="datepicker-here float-sm-end">
                                <DatePicker selected={startDate} onChange={handleChange} inline/>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default DataWidgets;