import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { PieChart } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import Chart from 'react-apexcharts';
import { apexPieChart } from "../../../Data/Charts/ApexChart";

const PieChartClass = () => {
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
                    <HeaderCard title={PieChart} />
                    <CardBody className="apex-chart">
                        <div id='piechart'>
                            <Chart options={apexPieChart.options} series={apexPieChart.series} type="pie" width={310} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default PieChartClass;