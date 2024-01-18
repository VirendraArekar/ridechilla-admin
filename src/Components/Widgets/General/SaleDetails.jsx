import React, { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { H5, H6 } from "../../../AbstractElements";
import { SalesData } from "../../../Data/Widgets/General/Data";
import CountUp from 'react-countup';
import HeaderCard from "../../Common/Component/HeaderCard";
import { Sale_Details } from "../../../Constant";

const SaleDetails = () => {
    return (
        <Fragment>
            <Col xl="6" className="box-col-6">
                <Card className="widget-joins widget-arrow">
                    <HeaderCard title={Sale_Details} setting={true} />
                    <CardBody>
                        <Row className="gy-4">
                            {SalesData.map((data) => {
                                return (
                                    <Col sm="6" key={data.id}>
                                        <div className="widget-card">
                                            <div className="d-flex align-self-center">
                                                <div className={`widget-icon ${data.iconClass}`}>
                                                    <i className={`${data.icon}`}></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <H6>{data.title}</H6>
                                                    <H5>$
                                                        <span className="counter">
                                                            <CountUp end={data.counter} duration={5} className="m-0" />
                                                        </span>
                                                        <span className={`${data.class}`}>{data.numbers}</span>
                                                    </H5>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default SaleDetails;