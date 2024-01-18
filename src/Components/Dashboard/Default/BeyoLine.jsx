import React, { Fragment } from "react";
import { BeyoLineChart } from "../../../Data/Dashboard/Default/Chart";
import { H2, H3, Image, LI, UL, P } from "../../../AbstractElements";
import { Col, Row } from "reactstrap";
import Chart from 'react-apexcharts';
import { BeyondtheLines, BeyondtheLinespara, hoursago6, june } from "../../../Constant";

const BeyoLine = () => {
    return (
        <Fragment>
            <Col lg="4">
                <Row className="beyo-line">
                    <Col xl="12" className="beyoline-header">
                        <div id="beyo-line">
                            <Chart options={BeyoLineChart.options} series={BeyoLineChart.series} type="bar" height={270} />
                        </div>
                    </Col>
                    <Col xl="12" className="beyo-detail" >
                        <H3>{BeyondtheLines} <span className="badge badge-primary">{hoursago6}</span></H3>
                        <P>{BeyondtheLinespara}</P>
                        <div className="date-history" >
                            <UL attrUL={{ as: 'ul', className: 'simple-list flex-row' }}>
                                <LI><Image attrImage={{ className: "img-fluid m-0", src: `${require("../../../assets/images/dashboard/beyo-line/1.png")}` }} /></LI>
                                <LI><Image attrImage={{ className: "img-fluid m-0", src: `${require("../../../assets/images/dashboard/beyo-line/2.png")}` }} /></LI>
                                <LI><Image attrImage={{ className: "img-fluid m-0", src: `${require("../../../assets/images/dashboard/beyo-line/3.png")}` }} /></LI>
                                <LI><Image attrImage={{ className: "img-fluid m-0", src: `${require("../../../assets/images/dashboard/beyo-line/4.png")}` }} /></LI>
                                <LI>
                                    <H2>+ 350</H2>
                                </LI>
                            </UL>
                            <div className="date-lable" >
                                <H3>10</H3>
                                <P>{june}</P>
                            </div >
                        </div >
                    </Col>
                </Row>
            </Col>
        </Fragment >
    )
}
export default BeyoLine;