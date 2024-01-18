import React, { Fragment } from "react";
import Chart from 'react-apexcharts';
import { MarketChart } from "../../../Data/Widgets/Chart/Chart";
import { Card, Col, Row } from "reactstrap";
import TotalEarning from "./TotalEarning";
import OrderStatus from "./OrderStatus";
import SkillStatus from "./SkillStatus";
import HeaderCard from "../../Common/Component/HeaderCard";
import { MarketingExpenses } from "../../../Constant";

const MarketingChart = () => {
    return (
        <Fragment>
            <Row>
                <Col lg="7" md="12" className="box-col-7">
                    <Card className="o-hidden">
                        <HeaderCard title={MarketingExpenses} setting={true} />
                        <div className="bar-chart-widget" >
                            <div className="bottom-content card-body" >
                                <Row>
                                    <Col className="col-12">
                                        <div id="chart-widget4">
                                            <Chart options={MarketChart.options} series={MarketChart.series} type="bar" height={380} />
                                        </div>
                                    </Col>
                                </Row>
                            </div >
                        </div >
                    </Card>
                </Col>
                <TotalEarning />
                <SkillStatus />
                <OrderStatus />
            </Row>
        </Fragment >
    )
}

export default MarketingChart;