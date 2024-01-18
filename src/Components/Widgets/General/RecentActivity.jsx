import React, { Fragment } from "react";
import { Clock } from "react-feather";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H6,H3 } from "../../../AbstractElements";
import { RecentActivityData } from '../../../Data/Widgets/General/Data';
import { RecenetActivity } from "../../../Constant";

const RecentActivityClass = () => {
    return (
        <Fragment>
            <Col xl="4" md="6">
                <Card>
                    <CardHeader>
                        <H3>{RecenetActivity}</H3>
                    </CardHeader>
                    <CardBody>
                        <div className="activity-media">
                            {RecentActivityData.map((data) => {
                                return (
                                    <div className="d-flex" key={data.id}>
                                        <div className={`recent-circle ${data.bgClass}`}></div>
                                        <div className="flex-grow-1">
                                            <H6 attrH6={{ className: "font-roboto" }} >{data.title}</H6>
                                            <span><Clock className="me-2" />
                                                <span className="font-roboto">{data.date}</span></span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default RecentActivityClass;