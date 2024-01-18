import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { H2, H6 } from "../../../AbstractElements";
import { StaticWidgetsData } from "../../../Data/Widgets/General/Data";
import CountUp from 'react-countup';

const StaticWidgets = () => {
    return (
        <Fragment>
            {StaticWidgetsData.map((data) => {
                return (
                    <Col sm="6" lg="3" key={data.id}>
                        <Card className="o-hidden">
                            <CardBody>
                                <div className="d-flex static-widget">
                                    <div className="flex-grow-1">
                                        <H6 className="font-roboto">{data.title}</H6>
                                        <H2 attrH2={{ className:'mb-0 counter'}}><CountUp end={data.counter} duration={5}/></H2>
                                    </div>
                                    {data.svg}
                                </div>
                                <div className="progress-widget">
                                    <div className="progress sm-progress-bar progress-animate">
                                        <div className={`${data.class}`} role="progressbar" style={{ width: `${data.progress}` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            <span className="animate-circle"></span>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })}
        </Fragment>
    );
};

export default StaticWidgets;