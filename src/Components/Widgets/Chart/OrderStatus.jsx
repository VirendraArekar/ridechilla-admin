import React from "react";
import Chart from 'react-apexcharts';
import { ShoppingBag } from "react-feather";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { H3 } from "../../../AbstractElements";
import { progres1, progres2, progres3, progres4, progres5 } from '../../../Data/Widgets/Chart/Chart'
import { orderStatus } from '../../../Constant';

const OrderStatus = () => {
    return (
        <Col lg="7" className="box-col-7" >
            <Card>
                <CardHeader className="pb-0" >
                    <Row>
                        <Col className="col-9" >
                            <H3>{orderStatus}</H3>
                        </Col>
                        <Col className="col-3 text-end" >
                            <ShoppingBag className="text-muted" />
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <div className="chart-container" >
                        <div id="progress1">
                            <Chart options={progres1.options} series={progres1.series} type="bar" height={70} />
                        </div>
                        <div id="progress2">
                            <Chart options={progres2.options} series={progres2.series} type="bar" height={70} />
                        </div>
                        <div id="progress3">
                            <Chart options={progres3.options} series={progres3.series} type="bar" height={70} />
                        </div>
                        <div id="progress4">
                            <Chart options={progres4.options} series={progres4.series} type="bar" height={70} />
                        </div>
                        <div id="progress5">
                            <Chart options={progres5.options} series={progres5.series} type="bar" height={70} />
                        </div>
                    </div >
                </CardBody>
            </Card>
        </Col>
    )
}

export default OrderStatus;