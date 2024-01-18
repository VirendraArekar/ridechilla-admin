import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Chart from 'react-apexcharts';
import { TurnoverChart } from '../../../Data/Widgets/Chart/Chart';
import HeaderCard from '../../Common/Component/HeaderCard';
import { Turnover } from '../../../Constant';

const TurnoverChartComponent = () => {
    const [display, setDisplay] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setDisplay(true)
        }, 500);
    }, [])
    if (!display) {
        return null;
    }
    return (
        <Col lg="5" className="xl-50 box-col-5">
            <div className="small-chart-widget chart-widgets-small">
                <Card>
                    <HeaderCard title={Turnover} setting={true} />
                    <CardBody>
                        <div className="chart-container">
                            <Row>
                                <Col>
                                    <div id="chart-widget7">
                                        <Chart options={TurnoverChart.options} series={TurnoverChart.series} type='area' height={320} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Col>
    );
};

export default TurnoverChartComponent;