import React, { Fragment } from "react";
import { DollarSign, FileText, ShoppingBag, Users } from "react-feather";
import { Card, CardBody, Col } from "reactstrap";
import { H3, P } from "../../../AbstractElements";
import Chart from 'react-apexcharts';
import { IncomeChart, OrderChart, SalesChart, VisitorChart } from "../../../Data/Dashboard/Ecommerce/Chart";

const SaleChart = () => {
    const data = [
        { id: 1, name: 'Total Sales', icon: <ShoppingBag />, value: '54,750 ', chart: SalesChart },
        { id: 2, name: 'Total Income', icon: <DollarSign />, value: '$35,532 ', chart: IncomeChart },
        { id: 3, name: 'Orders Paid', icon: <FileText />, value: '55,900 ', chart: OrderChart },
        { id: 4, name: 'Total Visitor', icon: <Users />, value: '67,900 ', chart: VisitorChart },
    ]
    return (
        <Fragment>
            { 
                data.map((item,i)=>
                {   
                    return(
                        <Col lg="3" sm="6" key={i}>
                            <Card className="sale-chart">
                                <CardBody>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="sale-detail">
                                                <div className="icon">{item.icon}</div>
                                                <div className="sale-content">
                                                    <H3>{item.name}</H3>
                                                    <P>{item.value}</P>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="small-chart-view sales-chart" id="sales-chart">
                                            <Chart options={item.chart.options} series={item.chart.series} type="bar" height={100}/>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })
            }
        </Fragment>
    );
};
export default SaleChart;