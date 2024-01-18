import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { P } from "../../../AbstractElements";
import { kolkata_India } from "../../../Constant";
import WetherData from "./WetherData";
import Clock from 'react-clock';

const WeatherClass = () => {
    const [value, setValue] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    const month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var d = new Date();
    let dateshow = month[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    return (
        <Fragment>
            <Col xxl="6" xl="12" sm="12" className="cols-xl-100 box-col-12">
                <Card className="o-hidden">
                    <div className="weather-widget-two">
                        <CardBody>
                            <Row>
                                <Col xl="5" md="6" >
                                    <div className="mobile-clock-widget">
                                        <div>
                                            <Clock value={value} />
                                        </div>
                                        <div className="date f-24 mb-2" id="date">
                                            <span>{dateshow}</span>
                                        </div>
                                        <P attrPara={{ className: 'm-0 f-14 text-light' }}>{kolkata_India}</P>
                                    </div>
                                </Col>
                                <WetherData />
                            </Row>
                        </CardBody>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};
export default WeatherClass;