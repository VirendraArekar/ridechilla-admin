import React, { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { H3, H5, Image, LI, P, UL } from "../../../AbstractElements";
import CountUp from 'react-countup';
import { KelvinELedbetter, Loss, NewOrder, Profit, UserProfileDesc4 } from "../../../Constant";

const Testimonial = () => {
    return (
        <Fragment>
            <Col xl="4" md="6">
                <Row>
                    <Col xl="12" md="12" className="box-col-12">
                        <Card className="testimonial">
                            <CardBody>
                                <Image attrImage={{ className: "img-90 user-img",src:`${require("../../../assets/images/general-widget/testimonial.png")}`}}/>
                                <H5>{KelvinELedbetter}</H5>
                                <P>{UserProfileDesc4}</P>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="12" md="12" className="box-col-12">
                        <Card className="order-widget">
                            <CardBody>
                                <Row className="heder-widget">
                                    <Col className="col-5">
                                        <span>{NewOrder}</span>
                                        <H3 attrH3={{ className: "total-num counter" }}>
                                            <CountUp end={25639} duration={5} className="mb-0 counter"style={{color:'var(--default-primary)'}} />
                                        </H3>
                                    </Col>
                                    <Col className="col-7">
                                        <div className="text-end">
                                            <UL attrUL={{ className:"simple-list"}}>
                                                <LI>{Profit}
                                                    <span className="product-stts font-primary m-l-10">8989
                                                        <i className="icon-angle-up f-12 m-l-10 me-0"></i>
                                                    </span>
                                                </LI>
                                                <LI>{Loss}
                                                    <span className="product-stts font-primary m-l-10">2560
                                                        <i className="icon-angle-down f-12 m-l-10 me-0"></i>
                                                    </span>
                                                </LI>
                                            </UL>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="new-order">
                                    <div>
                                        <div className="progress sm-progress-bar">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Fragment>
    );
};

export default Testimonial;