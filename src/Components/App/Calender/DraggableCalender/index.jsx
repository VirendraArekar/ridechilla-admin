import { Breadcrumbs, H3 } from '../../../../AbstractElements';
import { Dragging_Event } from '../../../../Constant';
import DragCalendar from './DragCalendar';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const DraggableContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Dragable Calender" parent="Apps" title="Dragable Calender" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className='pb-0'>
                                <H3>{Dragging_Event}</H3>
                            </CardHeader>
                            <CardBody>
                                <div className="basic-calendar">
                                    <Row>
                                        <DragCalendar />
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default DraggableContain;