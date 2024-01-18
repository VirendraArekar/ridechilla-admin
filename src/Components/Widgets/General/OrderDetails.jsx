import React, { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { H5, H6 } from "../../../AbstractElements";
import { OrderDetailsData } from "../../../Data/Widgets/General/Data";
import CountUp from 'react-countup';
import HeaderCard from "../../Common/Component/HeaderCard";

const OrderDetails = () => {
    return (
        <Fragment>
            <Col xl="6" className="box-col-6">
                <Card className="widget-joins">
                    <HeaderCard title={'Order Details'} setting={true} />
                    <CardBody>
                        <Row className="gy-4">
                            {OrderDetailsData.map((data) => {
                                return (
                                    <Col sm="6" key={data.id}>
                                        <div className="widget-card">
                                            <div className="d-flex align-self-center">
                                                <div className={`widget-icon ${data.iconClass}`}>
                                                    {data.svg1}
                                                </div>
                                                <div className="flex-grow-1">
                                                    <H6>{data.title}</H6>
                                                    <H5> {data.title === 'Delivered Order' && '$'}
                                                        <span className="counter"><CountUp end={data.count} duration={5} className="m-0" /></span>
                                                        <span className={`font-roboto ${data.fontClass} f-w-700`}>
                                                            <i className={`icofont ${data.icon}`}></i> {data.percent}</span></H5>
                                                    <div className="icon-bg">
                                                        {data.svg2}
                                                    </div>
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

export default OrderDetails;