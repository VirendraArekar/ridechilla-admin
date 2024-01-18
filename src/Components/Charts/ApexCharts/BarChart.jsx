import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { BarChart } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';
import Chart from 'react-apexcharts';
import { apexBarChart } from '../../../Data/Charts/ApexChart';

const BarChartClass = () => {
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
                    <HeaderCard title={BarChart} />
                    <CardBody>
                        <div id='basic-bar'>
                            <Chart options={apexBarChart.options} series={apexBarChart.series} type="bar" height={350} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default BarChartClass;