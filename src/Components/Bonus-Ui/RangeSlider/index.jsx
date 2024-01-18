import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import { Container, Row, Col } from 'reactstrap';
import BasicSliderClass from './BasicSlider';
import NegativeValuesClass from './NegativeValues';
import DisabledClass from './Disabled';
import FormatedLabelClass from './FormatedLabel';
import FormatedLabelClass2 from './FormatedLabel2';
import DraggableRangeClass from './DraggableRange';

const RangeSlider = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Range Slider' parent="Bonus-ui" title="Range Slider" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Row className="mb-0">
                            <BasicSliderClass />
                            <NegativeValuesClass />
                            <DisabledClass />
                            <FormatedLabelClass />
                            <FormatedLabelClass2 />
                            <DraggableRangeClass />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default RangeSlider;