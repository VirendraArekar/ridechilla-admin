import React, { Fragment } from 'react';
import Timeline1 from './Timeline1';
import VerticalTimelineComp from './VerticalTimelineComp';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Examples } from '../../../Constant';
import { Breadcrumbs } from '../../../AbstractElements';
import HeaderCard from '../../Common/Component/HeaderCard';

const Timeline = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Timeline' parent="Bonus Ui" title="Timeline" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title={`${Examples} 1`} />
                            <CardBody>
                                <Timeline1 />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>                            
                            <HeaderCard title={`${Examples} 2`} />
                            <CardBody>
                                <VerticalTimelineComp />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Timeline;