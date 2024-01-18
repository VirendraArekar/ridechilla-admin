import React, { useEffect, useState } from "react";
import { Col, Card, CardBody } from "reactstrap";
import HeaderCard from '../../Common/Component/HeaderCard';
import { RadarChart } from '../../../Constant';
import { Radar } from "react-chartjs-2";
import { RadarChartData } from "../../../Data/Widgets/Chart/ChartjsData";

const RadarChartClass = () => {
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setDisplay(true);
        }, 500);
    }, [])
    if(!display) {
        return;
    }    
    return (
        <Col xl="6" md="12" >
            <Card>
                <HeaderCard title={RadarChart} />
                <CardBody className="chart-block chart-vertical-center">
                    <Radar data={RadarChartData} options={RadarChartData.options} width={734} height={377}/>
                </CardBody>
            </Card>
        </Col>
    )
}

export default RadarChartClass;