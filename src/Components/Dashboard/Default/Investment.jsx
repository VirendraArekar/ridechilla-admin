import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { H2, H5 } from "../../../AbstractElements";
import Chart from 'react-apexcharts';
import { GainChart, InvestmentChart, ProfitChart } from "../../../Data/Dashboard/Default/Chart";
import { Profitin6months, TotalGain, TotalInvestment } from "../../../Constant";

const Investment = () => {
    const data = [
        { id: 1, name: TotalInvestment, chart: InvestmentChart, value: '$7454.25', label: '+13.6%', class: 'investment' },
        { id: 2, name: TotalGain, chart: GainChart, value: '$7454.25', label: '+15.4%', class: 'gain-chart' },
        { id: 3, name: Profitin6months, chart: ProfitChart, value: '$7454.25', label: '+15.4%', class: 'profit-chart' },
    ]
    return (
        <Fragment>
            <Col xl="5" lg="12" className="des-xl-100 box-col-100">
                <Card className="investment-chart">
                    <CardBody>
                        <div className="row">
                            {
                                data.map((item, i) => {
                                    return (
                                        <Col sm="4" key={i}>
                                            <div className={`investment-group ${item.class}`}>
                                                <span className="invest-lable">{item.label}</span>
                                                <Chart options={item.chart.options} series={item.chart.series} type="line" height={108} />
                                                <div className="chart-detail">
                                                    <H5>{item.name}</H5>
                                                    <H2>{item.value}</H2>
                                                </div>
                                            </div >
                                        </Col >
                                    )
                                })
                            }   
                        </div>
                    </CardBody >
                </Card >
            </Col >
        </Fragment >
    )
}

export default Investment;