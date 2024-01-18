import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap'
import { Breadcrumbs } from '../../../../AbstractElements';
import AnimatedCheckboxButtonsClass from './AnimatedCheckboxButtons';
import AnimatedClass from './AnimatedClass';
import CustomCheckboxClass from './CustomCheckbox';
import CustomRadioClass from './CustomRadio';
import SquareCheckboxClass from './SquareCheckbox';

const CheckboxandRadio = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Checkbox & Radio' parent="Form Controls" title="Checkbox & Radio" />
            <Container fluid={true}>
                <Row>
                    <CustomRadioClass />
                    <CustomCheckboxClass />
                    <SquareCheckboxClass />
                    <AnimatedClass />
                    <AnimatedCheckboxButtonsClass />
                </Row>
            </Container>
        </Fragment>
    );
}

export default CheckboxandRadio;