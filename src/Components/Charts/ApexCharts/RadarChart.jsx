import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { RadarChart } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import Chart from 'react-apexcharts';
import { apexRadarPolygonfillCharts } from "../../../Data/Charts/ApexChart";

const RadarChartClass = () => {
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
                    <HeaderCard title={RadarChart} />
                    <CardBody>
                        <div id='radarchart'>
                            <Chart options={apexRadarPolygonfillCharts.options} series={apexRadarPolygonfillCharts.series} type="radar" height={350} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default RadarChartClass;