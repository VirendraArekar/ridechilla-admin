import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { BasicAreaChart } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';
import Chart from 'react-apexcharts';
import { apexAreaChart } from '../../../Data/Charts/ApexChart';

const BasicAreaChartClass = () => {
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
            <Col sm='12' xl='6 box-col-6'>
                <Card>
                    <HeaderCard title={BasicAreaChart} />
                    <CardBody>
                        <div id='basic-apex'>
                            <Chart options={apexAreaChart.options} series={apexAreaChart.series} type="area" height={350} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default BasicAreaChartClass;