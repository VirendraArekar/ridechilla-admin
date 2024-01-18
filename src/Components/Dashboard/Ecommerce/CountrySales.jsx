import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3 } from "../../../AbstractElements";
import Chart from 'react-apexcharts';
import { CountryChart } from "../../../Data/Dashboard/Ecommerce/Chart";
import { SalesByCountries } from "../../../Constant";

const CountrySales = () => {
    return (
        <Fragment>
            <Col xxl="3" lg="4" sm="6 box-col-30">
                <Card className="country-sales-view">
                    <CardHeader>
                        <H3>{SalesByCountries}</H3>
                    </CardHeader>
                    <CardBody className="p-0">
                        <div className="medium-chart">
                            <div className="country-sales-chart" id="country-sales-chart">
                                <Chart options={CountryChart.options} series={CountryChart.series} type="radar" height={335} />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default CountrySales;