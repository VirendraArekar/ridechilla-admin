import React, { Fragment } from "react";
import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import { H2, H5, H6, Image } from "../../../AbstractElements";
import { SocialData } from "../../../Data/Widgets/General/Data";
import CountUp from 'react-countup';

const SocialWidgets = () => {
    const Dynamicimage = (image) => {
        return require(`../../../assets/images/general-widget/svg-icon/${image}`);
    }
    return (
        <Fragment>
            <Col xl="6" lg="12">
                <Row>
                    {SocialData.map((data) => {
                        return (
                            <Col sm="6" key={data.id}>
                                <Card className="social-widget-card">
                                    <CardBody>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 social-font">
                                                <Image attrImage={{ src:Dynamicimage(data.img), alt: "" }} />
                                            </div>
                                            <div className="flex-grow-1">
                                                <H2>{data.name}</H2>
                                            </div>
                                        </div>
                                    </CardBody>
                                    <CardFooter>
                                        <Row>
                                            <Col className="text-center">
                                                <H6 attrH6={{ className: "font-roboto" }} >Posts</H6>
                                                <H5 attrH5={{ className: "counter mb-0 font-roboto font-primary mt-1" }} ><CountUp end={data.posts} duration={5} /></H5>
                                            </Col>
                                            <Col className="text-center">
                                                <H6 attrH6={{ className: "font-roboto" }} >Likes</H6>
                                                <H5 attrH5={{ className: "counter mb-0 font-roboto font-primary mt-1" }} >
                                                    <CountUp end={data.likes} duration={5} className="mb-0 counter" />
                                                </H5>
                                            </Col>
                                        </Row>
                                    </CardFooter>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Fragment>
    );
};
export default SocialWidgets;