import React from "react";
import { Row, Col, Card, CardBody } from 'reactstrap'
import { P, Ribbon } from '../../../AbstractElements';
import { ribbon, ribbontext } from "../../../Constant";

const RibbonClass = () => {
    return (
        <CardBody>
            <Row>
                <Col sm="12" md="6" lg="4">
                    <Card className="ribbon-wrapper">
                        <CardBody>
                            <Ribbon attrRibbons={{ className: 'ribbon ribbon-primary ribbon-space-bottom' }} >{ribbon}</Ribbon>
                            <P>{ribbontext}</P>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card className="ribbon-wrapper">
                        <CardBody>
                            <div className="ribbon ribbon-primary ribbon-space-bottom">{ribbon}</div>
                            <P>{ribbontext}</P>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card className="ribbon-wrapper">
                        <CardBody>
                            <div className="ribbon ribbon-primary ribbon-space-bottom">{ribbon}</div>
                            <P>{ribbontext}</P>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </CardBody>
    )
}

export default RibbonClass;