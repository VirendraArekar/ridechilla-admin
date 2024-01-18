import React, { Fragment } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { H2, P } from '../../../AbstractElements';
import { New } from '../../../Constant';
import { Stockvaluedata } from '../../../Data/Dashboard/Default/Chart';

const BarChart = ({ title, price }) => {
    return (
        <Fragment>
            <Card className="value-chart stock-value bg-primary">
                <CardBody>
                    <Row>
                        <Col className='col-6'>
                            <div className="stock-value round-progress" id='stock-value'>
                                <Chart options={Stockvaluedata.options} series={Stockvaluedata.series} type="bar" height={120} />
                            </div>
                        </Col>
                        <Col className="col-6">
                            <div className="valuechart-detail" >
                                <div>
                                    <P>{title}</P>
                                    <H2>{price}</H2>
                                </div>
                            </div >
                        </Col>
                    </Row>
                </CardBody>
                <span className="badge badge-primary" >{New}</span >
            </Card>
        </Fragment >
    );
};

export default BarChart;