import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { WhetherIconsWithAnimations } from '../../../Constant';
import { weatherIconData } from '../../../Data/Icons/Data';
import HeaderCard from "../../Common/Component/HeaderCard";

const WeatherIcons = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Whether Icon' parent="Icons" title="Whether Icon" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title={WhetherIconsWithAnimations}/>
                            <CardBody>
                                <Row className="icon-lists whether-icon">
                                    {weatherIconData.map((icon, i) =>
                                        <Col lg="2 col-3" key={i}>
                                            {icon.icon}
                                        </Col>
                                    )}
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};


export default WeatherIcons;