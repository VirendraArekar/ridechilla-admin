import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { ColumnChart } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';
import Chart from 'react-apexcharts';
import { apexLineWithAnnotationCharts } from '../../../Data/Charts/ApexChart';

const ApexLineChartClass = () => {
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
                    <HeaderCard title={ColumnChart} />
                    <CardBody>
                        <div id='annotationchart'>
                            <Chart options={apexLineWithAnnotationCharts.options} series={apexLineWithAnnotationCharts.series} type="line" height={350} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default ApexLineChartClass;