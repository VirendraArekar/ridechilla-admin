import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { RotatingPieChart } from '../../../Constant';
import { Chart } from "react-google-charts";
import { H5 } from '../../../AbstractElements';

const PieChart5Class = ({ data }) => {
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
            <Col sm="12" xl="6">
                <Card>
                    <CardHeader>
                        <H5>{RotatingPieChart}  <span className="digits">{'2'}</span>  </H5>
                    </CardHeader>
                    <CardBody className="chart-block">
                        <div className="chart-overflow" id="pie-chart1">
                            <Chart
                                width={data.width}
                                height={data.height}
                                chartType={data.chartType}
                                loader={<div>{"Loading Chart"}</div>}
                                data={data.data}
                                options={{
                                    title: 'Indian Language Use',
                                    legend: 'none',
                                    pieSliceText: 'label',
                                    colors: ["#a927f9", "#534686", "#fb740d", "#FFA47A", "#a927f9", "#534686", "#51bb25", "#a927f9", "#fb740d", "#a927f9", "#534686", "#51bb25", "#a927f9", "#51bb25", "#534686", "#51bb25", "#a927f9", "#fb740d", "#a927f9", "#534686", "#534686", "#ff9f40"],
                                    slices: {
                                        4: { offset: 0.2 },
                                        12: { offset: 0.3 },
                                        14: { offset: 0.4 },
                                        15: { offset: 0.5 },
                                    },
                                }}
                                rootProps={data.rootProps}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default PieChart5Class;