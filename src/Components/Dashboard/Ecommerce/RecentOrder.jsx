import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { RecentChart } from "../../../Data/Dashboard/Ecommerce/Chart";
import Chart from 'react-apexcharts';
import { H3 } from "../../../AbstractElements";
import { RecentOrders } from "../../../Constant";

const RecentOrder = () => {
    return (
        <Fragment>
            <Col xxl="5" lg="4" sm="6 box-col-40">
                <Card className="recent-order">
                    <CardHeader className="pb-0">
                        <H3>{RecentOrders}</H3>
                    </CardHeader>
                    <CardBody className="pb-0">
                        <div className="medium-chart">
                            <div className="recent-chart" id="recent-chart">
                                <Chart options={RecentChart.options} series={RecentChart.series} type="area" height={355} />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default RecentOrder;