import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { H3, H5, Image } from "../../../AbstractElements";
import { SeeMore, SpecialWeekend, Upto50Discount } from "../../../Constant";

const WeekendView = () => {
    return (
        <Fragment>
            <Col xl="3" md="5 box-col-30">
                <Card className="weekend-view bg-primary">
                    <CardBody>
                        <div className="inner-bg"></div>
                        <div className="img-wrapper">
                            <Image attrImage={{ className: "img-fluid", src: `${require("../../../assets/images/dashboard-2/headphone.png")}`, alt: "headphone"}} /></div>
                        <div className="product-detail">
                            <H3>{SpecialWeekend}</H3>
                            <H5>{Upto50Discount}</H5>
                            <a className="btn" href="#javascript">{SeeMore}</a>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default WeekendView;