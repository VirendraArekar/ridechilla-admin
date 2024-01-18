import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Breadcrumbs } from '../../../../AbstractElements';
import BasicFormControlClass from './BasicFormControl';
import HtmlControlClass from './HtmlControl';
import EdgesInputStyleClass from './EdgesInputStyle';
import FlatInputStyleClass from './FlatInputStyle';
import RaiseInputStyleClass from './RaiseInputStyle';
import SolidInputStyleClass from './SolidInputStyle';
import InputSizingClass from './InputSizing';
import CustomControlsClass from './CustomControls';

const BaseInput = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Base Inputs' parent="Form Controls" title="Base Inputs"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <BasicFormControlClass />
                        <HtmlControlClass />
                    </Col>
                    <Col lg="6">
                        <EdgesInputStyleClass />
                    </Col>
                    <Col lg="6">
                        <FlatInputStyleClass />
                    </Col>
                    <Col lg="6">
                        <RaiseInputStyleClass />
                     </Col>
                    <Col lg="6">
                        <SolidInputStyleClass />
                    </Col>
                    <Col sm="12">
                        <InputSizingClass />
                        <CustomControlsClass />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default BaseInput;