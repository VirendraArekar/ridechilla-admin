import React from 'react';
import { Col, Card, CardBody } from "reactstrap";
import HeaderCard from '../../Common/Component/HeaderCard';
import { LineChart } from '../../../Constant';
import { Line } from 'react-chartjs-2';
import { lineChartData, lineChartOptions } from '../../../Data/Widgets/Chart/ChartjsData';

const LineChartClass = () => {
    return (
        <Col xl="6" md="12" >
            <Card>
                <HeaderCard title={LineChart} />
                <CardBody className="chart-block">
                    <Line data={lineChartData} options={lineChartOptions} width={778} height={400} />
                </CardBody>
            </Card>
        </Col>
    )
}

export default LineChartClass;