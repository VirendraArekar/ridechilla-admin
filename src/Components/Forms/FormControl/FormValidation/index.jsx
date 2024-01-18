import React, { Fragment } from 'react';
import TooltipForm from '../TooltipForm';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { classesfor, feedbackd, positionrelative, tooltipd, Tooltips, Tooltiptext, Tooltiptext2, Tooltiptext3 } from '../../../../Constant';
import { Breadcrumbs, H3 } from '../../../../AbstractElements';
import CustomStylesClass from './CustomStyles';
import BrowserDefaultsClass from './BrowserDefaults';
import SupportedElementsClass from './SupportedElements';

const FormValidation = () => {

    return (
        <Fragment>
            <Breadcrumbs mainTitle='Validation Forms' parent="Forms Controls" title="Validation Forms" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <CustomStylesClass />
                        <BrowserDefaultsClass />
                        <SupportedElementsClass />
                        <Card>
                            <CardHeader className='pb-0'>
                                <H3>{Tooltips}</H3>
                                <span>{Tooltiptext} <code className="text-danger">{feedbackd}</code> {classesfor} <code className="text-danger">{tooltipd}</code> {Tooltiptext2} <code className="text-danger">{positionrelative}</code> {Tooltiptext3}</span>
                            </CardHeader>
                            <CardBody>
                                <TooltipForm />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default FormValidation;