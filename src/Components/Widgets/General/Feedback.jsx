import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { H3, H4, H5, H6, LI, UL } from "../../../AbstractElements";
import { FeedbackSvg } from "../../../Data/Widgets/General/Data";
import { CustomerFeedback, Negative, Positive } from "../../../Constant";

const Feedback = () => {   
    return (
        <Fragment>
            <Col xxl="3" xl="6" md="6" className="cols-xl-25 box-col-6">
                <Card>
                    <CardBody className="widget-feedback">
                        <div className="feedback-top text-center">
                            <FeedbackSvg />
                            <H3>{CustomerFeedback}</H3>
                            <H6 attrH6={{ className: "font-roboto f-w-400" }} >385749</H6>
                        </div>
                        <div id="feedback-chart"></div>
                        <UL attrUL={{ className: 'simple-list flex-row' }}>
                            <LI attrLI={{ className: "font-roboto" }} >
                                <H4>{Positive}</H4>
                                <H5 attrH5={{ className:"font-success" }} >90%</H5>
                            </LI>
                            <LI attrLI={{ className: "font-roboto" }} >
                                <H4>{Negative}</H4>
                                <H5 attrH5={{ className: "font-danger" }} >10%</H5>
                            </LI>
                        </UL>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default Feedback;