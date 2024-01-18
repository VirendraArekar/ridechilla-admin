import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { BubbleChart } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import Chart from 'react-apexcharts';
import { apex3DbubbleCharts } from "../../../Data/Charts/ApexChart";

const BubbleChartClass = () => {
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
            <Col sm='12' xl='6'>
                <Card>
                    <HeaderCard title={BubbleChart} />
                    <CardBody>
                        <div id='chart-bubble'>
                            <Chart options={apex3DbubbleCharts.options} series={apex3DbubbleCharts.series} type="bubble" height={350} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default BubbleChartClass;