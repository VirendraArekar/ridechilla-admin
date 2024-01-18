import React, { Fragment } from "react";
import CountUp from 'react-countup';
import { H4 } from "../../../AbstractElements";
import Chart from 'react-apexcharts';
import { Line2Chart, LineChart, Line1Chart } from "../../../Data/Widgets/Chart/Chart";
import { Card, CardBody, Col, Row } from "reactstrap";
import { PRODUCTS, PROJECTS, SALE } from "../../../Constant";

const ChartWidgets = () => {
    const data = [
        { id: 1, name: SALE, chart: LineChart, count: 90, fontColor: 'primary', countprise: 3654.00, icon: '$' },
        { id: 2, name: PROJECTS, chart: Line1Chart, count: 30, fontColor: 'secondary', countprise: 12569, icon: '' },
        { id: 3, name: PRODUCTS, chart: Line2Chart, count: 68, fontColor: 'success', countprise: 3, icon: '', type: 'M' }
    ]
    return (
        <Fragment>
            <Row className="top-charts">
                {
                    data.map((item, i) => {
                        return (
                            <Col lg="4" md="6" className="box-col-4" key={i}>
                                <Card className="o-hidden">
                                    <div className="chart-widget-top">
                                        <CardBody>
                                            <Row>
                                                <Col className="col-6">
                                                    <H4 attrH4={{ className: `f-w-600 font-${item.fontColor}` }} >{item.name}</H4>
                                                    <span className="num" >
                                                        <span className="counter" >
                                                            <CountUp end={item.count} duration={5} className="mb-0 counter" />
                                                        </span >%<i className="icon-angle-up f-12 ms-1" ></i>
                                                    </span >
                                                </Col>
                                                <Col className="col-6 text-end" >
                                                    <H4 attrH4={{ className: "num total-value" }} >{item.icon} <span className="counter">
                                                        <CountUp end={item.countprise} duration={5} className="mb-0 counter" />{item.type}</span>
                                                    </H4 >
                                                </Col>
                                            </Row>
                                        </CardBody>
                                        <div>
                                            <div className="chart-widget1" id="chart-widget1">
                                                <Chart options={item.chart.options} series={item.chart.series} type="area" height={170} />
                                            </div>
                                        </div>
                                    </div >
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Fragment >
    )
}
export default ChartWidgets;