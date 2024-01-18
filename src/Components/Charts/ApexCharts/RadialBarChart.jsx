import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { RadialBarChart } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import Chart from 'react-apexcharts';
import { apexRadialBarChart } from "../../../Data/Charts/ApexChart";

const RadialBarChartClass = () => {
    const [display, setDisplay] = useState(false)
     useEffect(() => {
        setTimeout(() => {
            setDisplay(true)
        },500);
    }, [])
    if(!display){
      return null;
    }
    return (
        <Fragment>
            <Col sm='12' xl="6">
                <Card>
                    <HeaderCard title={RadialBarChart} />
                    <CardBody>
                        <div id='circlechart'>
                            <Chart options={apexRadialBarChart.options} series={apexRadialBarChart.series} type="radialBar" height={350} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default RadialBarChartClass;