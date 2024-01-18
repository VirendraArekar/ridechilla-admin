import React, { useState } from "react";
import { SkillChart } from "../../../Data/Widgets/Chart/Chart";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { H3 } from "../../../AbstractElements";
import { TrendingUp } from "react-feather";
import Chart from 'react-apexcharts';
import { skillStatus } from '../../../Constant';

const SkillStatus = () => {
    const [data, setdata] = useState(SkillChart);
    setTimeout(() => {        
        setdata(prev=>({...prev, ...{series : [Math.floor(Math.random()*100),Math.floor(Math.random()*100)]}}));
    }, 3000);         
    return (
        <Col lg="5" sm="12" className="box-col-5">
            <Card>
                <CardHeader className="pb-0" >
                    <Row>
                        <Col className="col-9" >
                            <H3>{skillStatus}</H3>
                        </Col>
                        <Col className="col-3 text-end" >
                            <TrendingUp className="text-muted" />
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <div className="chart-container" >
                        <Chart options={data.options} series={data.series} type="radialBar" height={363} />
                    </div >
                </CardBody>
            </Card>
        </Col>
    )
}

export default SkillStatus;