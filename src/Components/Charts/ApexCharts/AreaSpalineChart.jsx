import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaSpalineChart } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';
import Chart from 'react-apexcharts';
import { areaSpaline } from '../../../Data/Charts/ApexChart';

const AreaSpalineChartClass = () => {
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
                    <HeaderCard title={AreaSpalineChart} />
                    <CardBody>
                        <div id='basic-apex'>
                            <Chart options={areaSpaline.options} series={areaSpaline.series} height="350" type="area" />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default AreaSpalineChartClass;