import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Chart from 'react-apexcharts';
import { LiveProductChart } from '../../../Data/Widgets/Chart/Chart';
import HeaderCard from '../../Common/Component/HeaderCard';
import { LiveProducts } from '../../../Constant';

const LiveChart = () => {
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
        <Col lg={7} className="xl-50 box-col-7">
            <div className="small-chart-widget chart-widgets-small">
                <Card>
                    <HeaderCard title={LiveProducts} setting={true} />
                    <CardBody>
                        <div className="chart-container">
                            <Row>
                                <Col>
                                    <div id="chart-widget6">
                                        <Chart options={LiveProductChart.options} series={LiveProductChart.series} type='line' height={320} />
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

export default LiveChart;