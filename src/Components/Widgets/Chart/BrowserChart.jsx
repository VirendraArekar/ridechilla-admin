import React, { Fragment, useEffect, useState } from 'react';
import { BrowserUses } from '../../../Data/Widgets/Chart/Chart';
import Chart from 'react-apexcharts';
import { Col, Row, Card, CardBody } from 'reactstrap';
import HeaderCard from '../../Common/Component/HeaderCard';
import { Browser_Uses } from '../../../Constant';

const BrowserChartWidgets = () => {
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
        <Fragment>
            <Row>
                <Col sm="12" className="box-col-12">
                    <div className="donut-chart-widget">
                        <Card>
                            <HeaderCard title={Browser_Uses} setting={true} />
                            <CardBody>
                                <div id="chart-widget13">
                                    <Chart options={BrowserUses.options} series={BrowserUses.series} height="500" type="candlestick" />
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};
export default BrowserChartWidgets;