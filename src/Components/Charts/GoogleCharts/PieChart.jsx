import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Chart } from "react-google-charts";
import HeaderCard from '../../Common/Component/HeaderCard';

const PieChartClass = ({ data, title, colClass, is3D, pieHole, pieStartAngle, pieSliceText }) => {
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
            <Col xs="12" className={colClass ? 'col-sm-12' : 'col-sm-12 col-xl-6'}>
                <Card>
                    <HeaderCard title={`${title} 1`}/>
                    <CardBody className="chart-block">
                        <div className="chart-overflow" id="pie-chart1">
                            <Chart
                                width={data.width}
                                height={data.height}
                                chartType={data.chartType}
                                loader={<div>{"Loading Chart"}</div>}
                                data={data.data}
                                options={data.options && is3D ? { is3D: is3D } : '' &&
                                    pieHole ? { pieHole: pieHole } : '' &&
                                        pieStartAngle ? { pieStartAngle: pieStartAngle } : '' &&
                                            pieSliceText ? { pieSliceText: pieSliceText } : ''
                                }
                                rootProps={data.rootProps}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default PieChartClass;