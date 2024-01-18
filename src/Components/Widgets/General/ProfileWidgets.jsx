import React, { Fragment } from "react";
import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import { H4, H6, LI, UL, H5, Image } from "../../../AbstractElements";
import CountUp from 'react-countup';
import { Follower, Following, JennyGester, Manager, TotalPost } from "../../../Constant";

const ProfileWidgets = () => {
    return (
        <Fragment>
            <Col xl="4" lg="6" md="12">
                <Card className="custom-profile">
                    <CardBody>
                        <div className="card-profile">
                            <Image attrImage={{ className: "user-img", src: `${require("../../../assets/images/general-widget/user-profile.png")}`}}/>
                        </div>
                        <div className="text-center profile-details">
                            <H4>{JennyGester}</H4>
                            <H6>{Manager}</H6>
                        </div>
                        <UL attrUL={{ className: "flex-row card-social" }} >
                            <LI attrLI={{ className: "bg-fb" }} >
                                <a href="https://facebook.com/" title=""><i className="fa fa-facebook me-0"></i></a>
                            </LI>
                            <LI attrLI={{ className: "bg-gplus" }} >
                                <a href="https://myaccount.google.com/" title=""><i className="fa fa-google-plus me-0"></i></a>
                            </LI>
                            <LI attrLI={{ className: "bg-twitter" }} >
                                <a href="https://twitter.com/" title=""><i className="fa fa-twitter me-0"></i></a>
                            </LI>
                            <LI attrLI={{ className: "bg-insta" }} >
                                <a href="https://www.instagram.com/" title=""><i className="fa fa-instagram me-0"></i></a>
                            </LI>
                            <LI attrLI={{ className: "bg-linkedin" }} >
                                <a href="https://www.linkedin.com/" title=""><i className="fa fa-linkedin me-0"></i></a>
                            </LI>
                        </UL>
                    </CardBody>
                    <CardFooter>
                        <Row>
                            <Col sm="4" className="col-4">
                                <H6 attrH6={{ className: "font-roboto" }}>{Follower}</H6>
                                <H5 attrH5={{ className: "counter" }} ><CountUp end={9564} duration={5} className="mb-0 counter" /></H5>
                            </Col>
                            <Col sm="4" className="col-4">
                                <H6 attrH6={{ className: "font-roboto" }}>{Following}</H6>
                                <H5><span className="counter"><CountUp end={49} duration={5} className="mb-0 counter" /></span>K</H5>
                            </Col>
                            <Col sm="4" className="col-4">
                                <H6 attrH6={{ className: "font-roboto" }} >{TotalPost}</H6>
                                <H5><span className="counter"><CountUp end={96} duration={5} className="mb-0 counter" /></span>M</H5>
                            </Col>
                        </Row>
                    </CardFooter>
                </Card>
            </Col>
        </Fragment>
    );
};

export default ProfileWidgets;