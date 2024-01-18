import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BothDragClass from './BothDrag';
import { Breadcrumbs } from '../../../../AbstractElements';

const DraggingCards = () => {

    return (
        <Fragment>
            <Breadcrumbs mainTitle='Draggable Cards' parent='Bonus Ui' title='Draggable Cards' />
            <Container fluid={true}>
                <Row className="ui-sortable" >
                    <BothDragClass />
                </Row>
            </Container>
        </Fragment>
    );
};

export default DraggingCards;