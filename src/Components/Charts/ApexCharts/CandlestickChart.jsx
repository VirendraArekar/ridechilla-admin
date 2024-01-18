import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { CandlestickChart } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import Chart from 'react-apexcharts';
import { apexCandleStickCharts } from "../../../Data/Charts/ApexChart";

const CandlestickChartClass = () => {
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
            <Col sm='12'>
                <Card>
                    <HeaderCard title={CandlestickChart} />
                    <CardBody >
                        <div id='candlestick'>
                            <Chart options={apexCandleStickCharts.options} series={apexCandleStickCharts.series} type="candlestick" height={350} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default CandlestickChartClass;