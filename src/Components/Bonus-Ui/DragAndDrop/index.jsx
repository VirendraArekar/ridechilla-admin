import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import dragula from 'react-dragula';
import { clickAndDrag, SpillDragNDrop, CopyDragNDrop } from '../../../Constant';
import { Breadcrumbs } from '../../../AbstractElements';
import HeaderCard from '../../Common/Component/HeaderCard';

const DragAndDrop = () => {

    const dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {};
            dragula([componentBackingInstance], options);
        }
    };

    const dragulaDecoratorSpill = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {
                isContainer: function (el) {
                    return false;
                },
                moves: function (el, source, handle, sibling) {
                    return true;
                },
                accepts: function (el, target, source, sibling) {
                    return true;
                },
                invalid: function (el, handle) {
                    return false;
                },
                direction: 'vertical',
                copy: false,
                copySortSource: false,
                revertOnSpill: true,
                removeOnSpill: true,
                mirrorContainer: document.body,
                ignoreInputTextSelection: true
            };
            dragula([componentBackingInstance], options);
        }
    };

    const dragulaDecoratorRight = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {
                copys: (el, source) => {
                    return el.id === 'left';
                },
                copyItem: (el, target, source, sibling) => {
                    return sibling.id === 'left';
                },
                accepts: (el, target, source, sibling) => {
                    return target.id === 'left';
                },
                copy: true,
                copySortSource: true,
                removeOnSpill: false,
                mirrorContainer: document.getElementById('right'),
            };
            dragula([componentBackingInstance], options);
        }
    };
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Drag & Drop' parent="Bouns Ui" title="Drag & Drop" />
            <Container fluid={true}>
                <Row>
                    <Col lg="6">
                        <Card>
                            <HeaderCard title={clickAndDrag} />
                            <CardBody>
                                <div className="ui-sortable small-drag" id="draggableMultiple">
                                    <div className='container' ref={dragulaDecorator}>
                                        <div>{'You can move these elements between these two containers'}</div>
                                        <div>{'Moving them anywhere else isn\'t quite possible'}</div>
                                        <div>{'There\'s also the possibility of moving elements around in the same container, changing their position'}</div>
                                        <div>{'This is the default use case. You only need to specify the containers you want to use'}</div>
                                        <div>{'More interactive use cases lie ahead'}</div>
                                        <div>{'Make sure to check out the documentation on GitHub!'}</div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <HeaderCard title={SpillDragNDrop} />
                            <CardBody>
                                <div className="ui-sortable" id="draggableMultiple">
                                    <div className='container' ref={dragulaDecoratorSpill}>
                                        <div>{'You can move these elements between these two containers'}</div>
                                        <div>{'Moving them anywhere else isn\'t quite possible'}</div>
                                        <div>{'There\'s also the possibility of moving elements around in the same container, changing their position'}</div>
                                        <div>{'This is the default use case. You only need to specify the containers you want to use'}</div>
                                        <div>{'You can move these elements between these two containers'}</div>
                                        <div>{'Moving them anywhere else isn\'t quite possible'}</div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="12">
                        <Card>
                            <HeaderCard title={CopyDragNDrop} />
                            <CardBody>
                                <div className="ui-sortable" id="draggableMultiple">
                                    <div className='container' id="right" ref={dragulaDecoratorRight}>
                                        <div>{'There\'s also the possibility of moving elements around in the same container, changing their position'}</div>
                                        <div>{'This is the default use case. You only need to specify the containers you want to use'}</div>
                                        <div>{'You can move these elements between these two containers'}</div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default DragAndDrop;