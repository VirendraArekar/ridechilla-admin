import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Chart from 'react-apexcharts';
import { WidgetsUserChart } from '../../../Data/Widgets/Chart/Chart';
import HeaderCard from '../../Common/Component/HeaderCard';
import { Uses } from '../../../Constant';

const UsesChart = () => {
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
        <Col lg="7" className="xl-50 box-col-7">
            <div className="small-chart-widget chart-widgets-small">
                <Card>
                    <HeaderCard title={Uses} setting={true} />
                    <CardBody>
                        <div className="chart-container">
                            <Row>
                                <Col>
                                    <div id="chart-widget9">
                                        <Chart options={WidgetsUserChart.options} series={WidgetsUserChart.series} height="320" type="bubble" />
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

export default UsesChart;