import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3, H5 } from "../../../AbstractElements";
import Chart from 'react-apexcharts';
import { YearlyChart } from "../../../Data/Dashboard/Default/Chart";
import { Monday, YearlyOverview } from "../../../Constant";

const YearlyView = () => {    
    return (
        <Fragment>
            <Col xl="4" lg="3" md="6">
                <Card className="yearly-view">
                    <CardHeader className="pb-0">
                        <H3>{YearlyOverview}<span className="badge badge-primary">{YearlyChart.badge}</span></H3>
                        <H5 attrH5={{ className: 'mb-0'}} >{Monday}</H5>
                    </CardHeader>
                    <CardBody className="p-0" >
                        <div className="yearly-view" id="yearly-view">
                            <Chart options={YearlyChart.options} series={YearlyChart.series} type="area" height={203} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment >
    );
};

export default YearlyView;