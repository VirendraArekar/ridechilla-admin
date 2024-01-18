import React, { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { H2, P } from "../../../AbstractElements";
import { StockChart } from "../../../Data/Dashboard/Default/Chart";
import Chart from 'react-apexcharts';
import { Hot, StockValue, TodayStockValue } from "../../../Constant";
import BarChart from "./Barchart";

const ValueChart = () => {
    return (
        <Fragment>
            <Col lg="3">
                <Row>
                    <Col xl="12" sm="6" lg="12">
                        <BarChart price="$7454.25" title='Our Sale Value' />
                    </Col>
                    <Col xl="12" sm="6" lg="12">
                        <Card className="value-chart stock-value bg-secondary" >
                            <CardBody>
                                <Row>
                                    <Col className="col-6">
                                        <div className="stock-value" id="stock-value">
                                            <Chart options={StockChart.options} series={StockChart.series} type="bar" height={120} />
                                        </div>
                                    </Col>
                                    <Col className="col-6">
                                        <div className="valuechart-detail" >
                                            <div>
                                                <P>{TodayStockValue}</P>
                                                <H2>{StockValue}</H2>
                                            </div>
                                        </div >
                                    </Col>
                                </Row>
                            </CardBody>
                            <span className="badge badge-primary" >{Hot}</span >
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Fragment >
    );
};
export default ValueChart;