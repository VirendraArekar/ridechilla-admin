import React, { Fragment } from 'react';
import Board from 'react-trello';
import { H3 } from '../../../../AbstractElements'
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Draggabledata, Draggabledata1 } from '../../../../Data/Bonus-ui/Data';
import { DragOnlyCard } from '../../../../Constant';

const BothDragClass = () => {

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader className='pb-0'>
                        <H3>{DragOnlyCard}</H3>
                    </CardHeader>
                    <CardBody>
                        <div className='draggable-normal'>
                            <Board draggable={true} style={{ backgroundColor: 'transparent' }} data={Draggabledata} />
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader className='pb-0'>
                        <H3>{DragOnlyCard}</H3>
                    </CardHeader>
                    <CardBody>
                        <div className='draggable-normal'>
                            <Board draggable={true} style={{ backgroundColor: 'transparent' }} data={Draggabledata1} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default BothDragClass;