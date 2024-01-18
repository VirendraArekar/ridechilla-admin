import React, { Fragment } from "react";
import { FinanceChart, OrderChart } from "../../../Data/Widgets/Chart/Chart";
import Chart from 'react-apexcharts';
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { orderStatus } from "../../../Constant";
import { Navigation, ShoppingBag } from "react-feather";
import { H3 } from "../../../AbstractElements";
const Finance = () => {
    return (
        <Fragment>
            <Row>
                <Col lg="5" className="box-col-5">
                    <Card>
                        <CardHeader className="pb-0">
                            <Row>
                                <Col className="col-9" >
                                    <H3>Finance</H3>
                                </Col>
                                <Col className="col-3 text-end" >
                                    <Navigation className="text-muted" />
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="chart-container" >
                                <div id="columnchart">
                                    <Chart options={FinanceChart.options} series={FinanceChart.series} height="300" type="bar" />
                                </div>
                            </div >
                        </CardBody>
                    </Card>
                </Col >
                <Col lg="7" className="box-col-7">
                    <Card>
                        <CardHeader className="pb-0">
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
                                <div id="linechart">
                                    <Chart options={OrderChart.options} series={OrderChart.series} height="300" type="line" />
                                </div>
                            </div >
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment >
    )
}
export default Finance;