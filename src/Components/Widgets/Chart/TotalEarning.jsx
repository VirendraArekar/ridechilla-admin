import React from "react";
import CountUp from 'react-countup';
import { Card, Col, Row } from "reactstrap";
import { H2 } from "../../../AbstractElements";
import Chart from 'react-apexcharts';
import { TotalEarningChart } from "../../../Data/Widgets/Chart/Chart";
import HeaderCard from "../../Common/Component/HeaderCard";
import { Month, Today, Total_Earning, Year } from "../../../Constant";

const TotalEarning = () => {
    const data = [
        { id: 1, icon: '%', time: '12', timetype: Year, value: '3659', type: 'M' },
        { id: 2, icon: '%', time: '15', timetype: Month, value: '698', type: 'M' },
        { id: 3, icon: '%', time: '34', timetype: Today, value: '9361', type: 'M' }
    ]
    return (
        <Col lg="5" md="12" className="box-col-5">
            <Card className="o-hidden" >
                <HeaderCard title={Total_Earning} setting={false} />
                <div className="bar-chart-widget" >
                    <div className="top-content bg-primary" ></div >
                    <div className="bottom-content card-body" >
                        <Row>
                            <Col className="col-12" >
                                <div id="chart-widget5">
                                    <Chart options={TotalEarningChart.options} series={TotalEarningChart.series} type="radialBar" height={350} />
                                </div>
                            </Col>
                        </Row>
                        <Row className="text-center" >
                            {
                                data.map((item, i) => {
                                    return (
                                        <Col key={i} className="col-4 b-r-light">
                                            <div>
                                                <span className="font-primary">{item.time}{item.icon}<i className="icon-angle-up f-12 ms-1"></i></span >
                                                <span className="text-muted block-bottom"> {item.timetype}</span >
                                                <H2 attrH2={{ className: "num m-0" }} >
                                                    <span className="counter color-bottom" >
                                                        <CountUp end={item.value} duration={5} className="mb-0 counter text-dark" />
                                                    </span > {item.type}
                                                </H2>
                                            </div >
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div >
                </div >
            </Card>
        </Col>
    )
}
export default TotalEarning;